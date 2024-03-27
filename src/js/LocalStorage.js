
export default class LocalStorage {

	constructor(){}

	getColor(){
		return window.localStorage.getItem( 'wpbr_options__color' );
	}

	getReveal(){
		return window.localStorage.getItem( 'wpbr_options__reveal' );
	}

	setColor( color ){
		console.log( 'setColor', color );
		window.localStorage.setItem( 'wpbr_options__color', color );
	}

	setReveal( reveal ){
		console.log( 'setReveal', reveal );
		window.localStorage.setItem( 'wpbr_options__reveal', reveal );
	}
}