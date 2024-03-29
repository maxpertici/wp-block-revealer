
import { __ } from '@wordpress/i18n';

import {useEffect, useState} from 'react';

import LocalStorage from "./LocalStorage.js";

import { GlobalSignalReveal, GlobalSignalColor } from "./GlobalSignal.js";

import { effect } from "@preact/signals-react";

import Editor from "./Editor.js";

export default function Button() {

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// storage
	const storage = new LocalStorage();
	const editor = new Editor();


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// states
	const [ active, setActive ] = useState(false );
	const [ color, setColor ] = useState('blue' );
	const [checked, setChecked] = useState(false);


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// setter
	function setButtonReveal( value ) {
		setActive( value );
		setChecked( value );
		storage.setReveal( value );
		editor.setReveal( value );
		GlobalSignalReveal.value = value ;
	}

	function setButtonColor( value ) {
		setColor( value );
		storage.setColor(value);
		editor.setColor(value);
		GlobalSignalColor.value = value ;
	}


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// handles
	function handleActiveChange(e){
		// e.preventDefault();
		setButtonReveal( e.target.checked )
		// GlobalSignalColor.value = e.target.checked;

	}

	function handleColorChange(e) {
		e.preventDefault();
		setButtonColor( e.target.dataset.color );
		// GlobalSignalColor.value = e.target.dataset.color;
	}


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// Effects

	// on mount
	useEffect(() => {
		setButtonReveal( GlobalSignalColor.value );
		setButtonColor( GlobalSignalColor.value );
	}, []);


	// on state update
	useEffect(() => {
		setButtonReveal( active );
		GlobalSignalReveal.value = active ;
	}, [ active ]);

	// on state update
	useEffect(() => {
		setButtonColor( color );
		GlobalSignalColor.value = color ;
	}, [ color ]);


	// on signal update
	effect(() => {
		if( GlobalSignalColor.value !== color ) {
			setButtonColor( GlobalSignalColor.value );
		}
		if( GlobalSignalReveal.value !== active ) {
			setButtonReveal( GlobalSignalReveal.value );
		}
	});


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// markup
	let toggleClass = active ? 'wp-block-revealer-options__toggle option-active' : 'wp-block-revealer-options__toggle';


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// translations

	let reveal = BlockRevealerVars.translations.reveal;

	let blue  = BlockRevealerVars.translations.colors.blue;
	let white = BlockRevealerVars.translations.colors.white;
	let black = BlockRevealerVars.translations.colors.black;


	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// Return

	return (

		<>
		<form className="wp-block-revealer-options__form">

			<div className={toggleClass}>

				<input type="checkbox" id="wpbkr-toogle-reveal" name="wpbkr-toogle" defaultChecked={checked} onChange={ handleActiveChange } />

				<label for="wpbkr-toogle-reveal">
					<span className="screen-reader-text">
					{ reveal }
					</span>
				</label>

				<div className="wp-block-revealer-options__color-swatch">

					<button data-color="blue"
							onClick={ handleColorChange }
							className="wp-block-revealer-options__color wp-block-revealer-options__color--blue">

						<span className="screen-reader-text">
						{ blue }
						</span>
					</button>

					<button data-color="white"
							onClick={ handleColorChange }
							className="wp-block-revealer-options__color wp-block-revealer-options__color--white">

						<span className="screen-reader-text">
						{ white }
						</span>
					</button>

					<button data-color="black"
							onClick={ handleColorChange }
							className="wp-block-revealer-options__color wp-block-revealer-options__color--black">

						<span className="screen-reader-text">
						{ black }
						</span>
					</button>

				</div>

				<div className="wp-block-revealer-options__indicator"></div>

			</div>

		</form>
		</>
	)
}