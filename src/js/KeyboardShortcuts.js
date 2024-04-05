/**
 * KeyboardShortcuts
 */

import Editor from './Editor.js';

import { GlobalSignalReveal, GlobalSignalColor } from "./GlobalSignal.js";

export default class KeyboardShortcuts {

	constructor() {}

	bind(){

		let editor = new Editor();

		// Ctrl + Alt + R
		// https://www.delftstack.com/howto/javascript/javascript-keyboard-shortcut/

		[].forEach.call( editor.getBodyNodes(), ( element ) => {

			element.addEventListener( 'keydown', ( e ) => {

				if( e.ctrlKey && e.altKey && e.keyCode === 82 ){
					GlobalSignalReveal.value = !GlobalSignalReveal.value;
				}
			} )
		});

		// document
		if( document.body !== editor.getBody() ){

			document.addEventListener( 'keydown', ( e ) => {

				if( e.ctrlKey && e.altKey && e.keyCode === 82 ){
					GlobalSignalReveal.value = !GlobalSignalReveal.value;
				}
			} ) ;
		}
	}

}