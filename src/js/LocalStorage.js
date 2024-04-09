
import Colors from './Colors.js';

export default class LocalStorage {

	constructor(){}

	getColor(){
		return window.localStorage.getItem( 'wpbr_options__color' ) === null ? 'blue' : window.localStorage.getItem( 'wpbr_options__color' );
	}

	getReveal(){
		return window.localStorage.getItem( 'wpbr_options__reveal' ) === 'true' ? true : false ;
	}

	setColor( color ){

		let colors = new Colors();
		let colorSwatch = colors.getColors();

		if( colorSwatch.indexOf( color ) > -1 ){
			color = 'blue';
		}

		window.localStorage.setItem( 'wpbr_options__color', color );
	}


	setReveal( reveal ){

		let revealValue = reveal === true ? 'true' : 'false' ;
		window.localStorage.setItem( 'wpbr_options__reveal', revealValue );
	}
}