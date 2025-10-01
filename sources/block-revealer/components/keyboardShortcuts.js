
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { Editor } from '../services/Editor.js';

const keyboardShortcuts = () => {

    const editor = new Editor();

    const { set } = useDispatch( 'core/preferences' );
    
    // Récupère l'état actuel du block revealer
    const isRevealEnabled = useSelect( ( select ) => {
        return select( 'core/preferences' ).get( 'wp-block-revealer', 'enabled' ) ?? false;
    }, [] );

    useEffect(() => {

        const handleKeyDown = (event) => {
            if( event.ctrlKey && event.altKey && event.keyCode === 82 ){
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                set( 'wp-block-revealer', 'enabled', !isRevealEnabled );
            }
        };

        let bodies = editor.getBodyNodes();
        bodies = Array.from(bodies).filter( body => body !== null );

        // Add Listener for keydown event sur tous les bodies
		[].forEach.call( bodies, ( element ) => {
			element.addEventListener( 'keydown', handleKeyDown);
		});

		// document (si différent du body de l'éditeur)
		if( document.body !== editor.getBody() ){
			document.addEventListener( 'keydown', handleKeyDown);
		}

        // Remove event listener on component unmount
        return () => {
            [].forEach.call( bodies, ( element ) => {
                element.removeEventListener( 'keydown', handleKeyDown);
            });
            if( document.body !== editor.getBody() ){
                document.removeEventListener( 'keydown', handleKeyDown);
            }
        };

    }, [isRevealEnabled, set]);

    return null;
}

export { keyboardShortcuts };