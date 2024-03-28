
import Colors from "./Colors.js";

import LocalStorage from "./LocalStorage.js";

export default class Editor {
	constructor(){
		this.bodyNodes = this.getBodyNodes();
	}

	init( { reveal = false, color= 'blue' } ){

		this.setPluginClass('wp-block-revealer');
		this.setColor( color );
		this.setReveal( reveal );
		this.bodyNodeObserver();
		this.interfaceObserver();
		this.storage = new LocalStorage();
		this.colors = new Colors();
	}

	getBodyNodes(){

		let bodyNodes = [] ;

		let main = this.domBody() ;

		bodyNodes.push( main );

		if( document.body !== main ){
			bodyNodes.push( document.body );
		}

		return bodyNodes ;
	}


	/**
	 * getBody
	 * @returns {HTMLElement|null}
	 */
	getBody(){
		return this.domBody();
	}

	/**
	 * isPostEditorIframe
	 * @returns {boolean}
	 */
	isPostEditorIframe(){
		return document.querySelector('.block-editor-writing-flow') ? false : true ;
	}

	/**
	 * domBody
	 * @returns {null|HTMLElement}
	 */
	domBody(){

		let body= null ;
		let node = this.isPostEditorIframe() ? document.querySelector('iframe[name="editor-canvas"]')  :  document.querySelector('.block-editor-writing-flow') ;

		if( node && this.isPostEditorIframe() ){
			body = node.contentWindow.document.body ;
		}

		if( node && ! this.isPostEditorIframe() ){
			body = document.querySelector('body') ;
		}

		return body ;
	}


	/**
	 * setPluginClass
	 * @param className
	 */
	setPluginClass( className ){

		this.bodyNodes.forEach( (node) => {
			node.classList.add( className );
		} );

	}

	/**
	 * removePluginClass
	 * @param className
	 */
	removePluginClass( className ){

		this.bodyNodes.forEach( (node) => {
			node.classList.remove( className );
		} );
	}

	/**
	 * setColor
	 * @param color
	 */

	setColor( color ){


		this.bodyNodes.forEach( (node) => {
			node.style.setProperty('--wpbr--editor--shadow--color', 'var( --wpbr--color--'+color+' )' );
			node.style.setProperty('--wpbr--editor--shadow--color-hover', 'var( --wpbr--color--'+color+'-hover )' );
		} );
	}

	setReveal( reveal ){

		this.bodyNodes.forEach( (node) => {
			if( reveal ){
				node.classList.add('wp-block-revealer--reveal');
			}else{
				node.classList.remove('wp-block-revealer--reveal');
			}
		} );

	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// Observers

	/**
	 * interfaceObserver
	 */
	interfaceObserver(){

		let interface_skeleton = document.querySelector('.interface-interface-skeleton__body');

		let observer = new MutationObserver( (mutationsList, observer) => {

			for( let mutation of mutationsList ){

				const has_secondary_sidebar = mutation.target.querySelector('.interface-interface-skeleton__secondary-sidebar') ? true : false ;

				if( has_secondary_sidebar ) {
					this.setPluginClass('wp-block-revealer--has-secondary-sidebar');
				}else{

					this.removePluginClass('wp-block-revealer--has-secondary-sidebar');
				}
			}

		} );

		observer.observe(interface_skeleton, { attributes: false, childList: true, subtree: false });
	}

	/**
	 * bodyNodeObserver
	 * @TODO : check when native body become iframe on tablet|mobile view
	 */
	bodyNodeObserver(){

		let body = this.domBody();

		if( body ){
			let observer = new MutationObserver( (mutationsList, observer) => {

				for( let mutation of mutationsList ){

					/**
					 * Compare class with storage values
					 */

					let styles = getComputedStyle(mutation.target);
					let color = styles.getPropertyValue('--wpbr--editor--shadow--color');
					let colore_name = this.colors.findColor( color ) ;

					if( mutation.type === 'attributes' && mutation.attributeName === 'class' ){

						// Color
						if( colore_name !== this.storage.getColor() ){
							this.setColor( this.storage.getColor() );
						}

						// Reveal
						// mutation.target.classList.add('wp-block-revealer');

						if( true === this.storage.getReveal() && ! mutation.target.classList.contains('wp-block-revealer--reveal') ){
							this.setReveal( this.storage.getReveal() );
						}
						if( false === this.storage.getReveal() && mutation.target.classList.contains('wp-block-revealer--reveal') ){
							this.setReveal( this.storage.getReveal() );
						}
					}

				}
			});

			observer.observe(body, { attributes: true, childList: false, subtree: false });
		}

	}



}