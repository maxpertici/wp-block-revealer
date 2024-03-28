
import Colors from "./Colors.js";

import LocalStorage from "./LocalStorage.js";

export default class Editor {
	constructor(){}

	init( { reveal = false, color= 'blue' } ){
		this.setPluginClass('wp-block-revealer');
		this.setColor( color );
		this.setReveal( reveal );
		this.bodyNodeObserver();
		this.storage = new LocalStorage();
		this.colors = new Colors();
	}

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

			observer.observe(body, { attributes: true, childList: true, subtree: true });
		}

	}

	getBody(){
		return this.domBody();
	}

	isPostEditorIframe(){
		return document.querySelector('.block-editor-writing-flow') ? false : true ;
	}

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

	setPluginClass( className ){

		let body = this.domBody();

		if( body ){
			body.classList.add( className );
		}
	}

	setColor( color ){

		let body = this.domBody();

		body.style.setProperty('--wpbr--editor--shadow--color', 'var( --wpbr--color--'+color+' )' );
		body.style.setProperty('--wpbr--editor--shadow--color-hover', 'var( --wpbr--color--'+color+'-hover )' );
	}

	setReveal( reveal ){

		let body = this.domBody();

		if( reveal ){
			body.classList.add('wp-block-revealer--reveal');
		}else{
			body.classList.remove('wp-block-revealer--reveal');
		}
	}



}