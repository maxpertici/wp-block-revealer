jQuery(document).ready(function($){

    // @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
    document.onkeyup = function(e) {

        // 18 : Alt
        // 66 : B
        // 67 : C
        // 82 : R
        
        // Enable / disable
        // Ctrl + Alt + R
        if( e.ctrlKey && e.altKey && e.which == 82 ){
            $('body').toggleClass('wp-block-revealer');
        }

        // Copy classes
        // Ctrl + Alt + C
        if( e.ctrlKey && e.altKey && e.which == 67 ){
            
            if( $('body').hasClass('wp-block-revealer') ){
                var block_classes = document.querySelector(".edit-post-visual-editor .is-hovered").classList ;
                try { wpbr_copyStringToClipboard( block_classes.value ); }
                catch (error) { console.error(error); }
            }

            // Next
            // someNodeList.forEach(callback[, thisArg]);
            // check modules :  *__modules
            // get classes + TAB

        }

    };

    // @source : https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
    function wpbr_copyStringToClipboard (str) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
     }
    
});