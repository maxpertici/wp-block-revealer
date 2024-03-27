

import './scss/block-revealer.scss' ;

import { waitingElement } from './js/Utils.js' ;

async function BlockRevealBootstrap(){

	await waitingElement('.popover-slot') ;

	const popover = document.querySelector('.popover-slot') ;
	const d = popover.ownerDocument;
	const html = d.documentElement;

	const appDiv  = document.createElement("div");
	      appDiv.id = 'block-revealer-root'
	
	const AppRoot = popover.parentNode.insertBefore( appDiv, popover );

	const App = (await import('./js/App.js')).default ;

	const React= window.React ;
	const { createRoot } =  window.ReactDOM ;

	const root = createRoot(AppRoot);
	root.render( React.createElement(App) );
}


// DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
	await BlockRevealBootstrap();
});