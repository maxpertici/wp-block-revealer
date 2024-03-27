// use domReady to make sure the DOM is fully loaded

import domReady from '@wordpress/dom-ready';
import BlockRevealerButton from "./BlockRevealerButton.js";

domReady( () => {

	const button = new BlockRevealerButton();

	const { createHigherOrderComponent } = wp.compose;
	const { Fragment } = wp.element;

	const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
		return ( props ) => {
			return (
				<Fragment>
					<BlockEdit { ...props } />
				</Fragment>
			);
		};
	}, 'withInspectorControls' );
} );