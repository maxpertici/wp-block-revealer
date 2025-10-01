

class Editor {

	constructor(){
		this.bodyNodes = this.getBodyNodes();
	}

	/**
	 * getBodyNodes
	 * @returns {HTMLElement[]}
	 */
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
	 * isSiteEditor
	 * @returns {boolean}
	 */
	isSiteEditor(){
		return document.querySelector('.edit-site-visual-editor') ? true : false ;
	}


	/**
	 * domBody
	 * @returns {null|HTMLElement}
	 */
	domBody(){

		let body= null ;
		let node = this.isPostEditorIframe() ? document.querySelector('iframe[name="editor-canvas"]') : document.querySelector('.block-editor-writing-flow') ;

		if( node && this.isPostEditorIframe() ){
			body = node.contentWindow.document.body ;
		}

		if( this.isSiteEditor() ){
			node = document.querySelector('iframe[name="editor-canvas"]') ;
			body = node.contentWindow.document.body ;
		}

		if( node && ! this.isPostEditorIframe() && ! this.isSiteEditor() ){
			body = document.querySelector('body') ;
		}

		return body ;
	}

}


export { Editor };