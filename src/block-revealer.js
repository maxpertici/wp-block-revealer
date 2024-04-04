

import './scss/block-revealer.scss' ;

import { waitingDependencies, waitingElement } from './js/Utils.js' ;


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

	// Waiting Editor Markup
	await waitingElement('.editor-document-tools__left') ;
	await waitingDependencies(['React', 'ReactDOM']) ;

	const isSiteEditor = document.querySelector('.edit-site-layout') ;
	if( isSiteEditor ) { return ; }

	const tools = document.querySelector('.editor-document-tools__left') ;

	// Create App Root
	const appDiv  = document.createElement("div");
	appDiv.id = 'block-revealer-root'

	const AppRoot = tools.parentNode.appendChild( appDiv );

	const App = (await import('./js/App.js')).default ;

	const React= window.React ;
	const { createRoot } =  window.ReactDOM ;

	// createRoot for React 18+
	if( 18 <= parseInt(React.version.split('.')[0]) ){
		const root = createRoot(AppRoot);
		root.render( React.createElement( App ) );
	}else{
		ReactDOM.render(React.createElement( App ), AppRoot);
	}

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
