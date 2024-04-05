

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

	// Editor Styles
	const Editor = (await import('./js/Editor.js')).default ;
	const canvas = new Editor();

	// Create App Root
	const appDiv  = document.createElement("div");
	appDiv.id = 'block-revealer-root'

	const AppRoot = document.querySelector('.editor-document-tools__left').parentNode.appendChild( appDiv );

	const App = (await import('./js/App.js')).default ;
	const React= window.React ;

	let RootApp = null ;

	// createRoot for React 18+
	if( 18 <= parseInt(React.version.split('.')[0]) ){
		const { createRoot } =  window.ReactDOM ;
		const root = createRoot(AppRoot);
		root.render( React.createElement( App ) );
		RootApp = document.querySelector('#block-revealer-root') ;
	}else{
		ReactDOM.render(React.createElement( App ), AppRoot);
		RootApp = document.querySelector('#block-revealer-root') ;
	}

	// Save RootApp !
	canvas.keepChildAlive( '.editor-document-tools__left', RootApp ) ;

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
