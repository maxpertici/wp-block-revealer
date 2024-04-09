
export default class Colors {

	constructor() {

		this.colors = {
			"blue"  : "#1989c1",
			"white" : "#b1b1b1",
			"black" : "#444343"
		}
	}


	getColors(){

		// return colors object to array
		return Object.values( this.colors ) ;
	}

	findColor( hex ){


		let colors = this.colors ;
		Object.keys( colors ).forEach(key=>{
			if( hex === colors[key] ){ return key ; }
		})

		return '' ;
	}

}