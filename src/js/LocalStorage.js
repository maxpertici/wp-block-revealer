
export default class LocalStorage {

	constructor(){}

	getColor(){
		return window.localStorage.getItem( 'wpbr_options__color' );
	}

	getReveal(){
		return window.localStorage.getItem( 'wpbr_options__reveal' ) === 'true' ? true : false ;
	}

	setColor( color ){
		// console.log( 'setColor', color );
		window.localStorage.setItem( 'wpbr_options__color', color );
	}


	setReveal( reveal ){

		let revealValue = reveal === true ? 'true' : 'false' ;
		window.localStorage.setItem( 'wpbr_options__reveal', revealValue );
	}
}