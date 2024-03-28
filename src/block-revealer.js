

import './scss/block-revealer.scss' ;

import { waitingElement } from './js/Utils.js' ;


/**
 * Bootstrap Block Reveal :
 * — wait for the Editor Markup
 * — create the App Root
 * — render the App
 * — init the Editor
 * — init the Keyboard Shortcuts
 *
 * @returns {Promise<void>}
 */
async function BlockRevealBootstrap(){

	// console.log('BlockRevealBootstrap');

	// Waiting Editor Markup
	await waitingElement('.popover-slot') ;

	const isSiteEditor = document.querySelector('.edit-site-layout') ;
	if( isSiteEditor ) { return ; }

	const popover = document.querySelector('.popover-slot') ;

	// Create App Root
	const appDiv  = document.createElement("div");
	appDiv.id = 'block-revealer-root'

	const AppRoot = popover.parentNode.insertBefore( appDiv, popover );

	const App = (await import('./js/App.js')).default ;

	const React= window.React ;
	const { createRoot } =  window.ReactDOM ;

	const root = createRoot(AppRoot);
	root.render( React.createElement( App ) );

	// Editor Styles
	const Editor = (await import('./js/Editor.js')).default ;
	const canvas = new Editor();

	const { GlobalSignalReveal, GlobalSignalColor } = await import('./js/GlobalSignal.js') ;

	canvas.init({
		reveal : GlobalSignalReveal.value,
		color : GlobalSignalColor.value
	});

	// Keyboard Shortcuts
	const KeyboardShortcuts = (await import('./js/KeyboardShortcuts.js')).default ;
	const keyboard = new KeyboardShortcuts();
	keyboard.bind();

}


/**
 * Init Block Reveal on DOMContentLoaded event
 */
document.addEventListener('DOMContentLoaded', async () => {

	await BlockRevealBootstrap();
});
