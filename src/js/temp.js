
export default class BlockRevealerButton {

	constructor() {

		this.color  = 'transparent' ;
		this.reveal = 'false' ;

		this.get_storage();

	}

	get_storage(){

		let wpbr_storage = window.localStorage ;

		let launch_wpbkr__color  = wpbr_storage.getItem('wpbr_options__color') ;

		if(
			launch_wpbkr__color === 'blue'  ||
			launch_wpbkr__color === 'white' ||
			launch_wpbkr__color === 'black' ){
			this.set_color( launch_wpbkr__color );
		}

		let launch_wpbkr__reveal = wpbr_storage.getItem('wpbr_options__reveal') ;

		if( launch_wpbkr__reveal === 'true' ){
			this.trigger_button();
		}
	}


	set_color( color ){
		this.color = color ;
		/*
		jQuery( 'body' )
			.css( '--wpbr--editor--shadow--color', 'var( --wpbr--color--'+color+' )' )
			.css( '--wpbr--editor--shadow--color-hover', 'var( --wpbr--color--'+color+'-hover )' );
		 */
	}

	trigger_button(){
		// jQuery('#wpbkr-toogle-reveal').trigger('click');
	}


	bind_keyboard(){

		document.onkeyup = (e) => {
			// Ctrl + Alt + R
			if( e.ctrlKey && e.altKey && e.which == 82 ){
				this.trigger_button();
			}
		};
	}

	toggle(){
		// this.reveal = 'false' ;
	}

}