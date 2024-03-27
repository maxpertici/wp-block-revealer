
import { useState } from 'react';

import LocalStorage from "./LocalStorage.js";

export default function Button() {

	const [ active, setActive ] = useState(false );

	const storage = new LocalStorage();

	function handleActiveChange(e){
		// e.preventDefault();
		setActive( e.target.checked )
		storage.setReveal( e.target.checked );
	}

	const [ color, setColor ] = useState('blue' );

	function handleColorChange(e) {
		e.preventDefault();
		setColor( e.target.dataset.color )
		storage.setColor(e.target.dataset.color);
	}

	return (
		<>

			<form className="wp-block-revealer-options__form">

				<div className="wp-block-revealer-options__toggle">

					<input type="checkbox" id="wpbkr-toogle-reveal" name="wpbkr-toogle" onClick={ handleActiveChange } />

					<label for="wpbkr-toogle-reveal">
						<span className="screen-reader-text">
						{/* wpbr_words.options__reveal_block_label */ }
						</span>
					</label>

					<div className="wp-block-revealer-options__color-swatch">
						<button data-color="blue"
								onClick={ handleColorChange }
								className="wp-block-revealer-options__color wp-block-revealer-options__color--blue"></button>
						<button data-color="white"
								onClick={ handleColorChange }
								className="wp-block-revealer-options__color wp-block-revealer-options__color--white"></button>
						<button data-color="black"
								onClick={ handleColorChange }
								className="wp-block-revealer-options__color wp-block-revealer-options__color--black"></button>
					</div>

					<div className="wp-block-revealer-options__indicator"></div>

				</div>

			</form>

		</>
	)
}