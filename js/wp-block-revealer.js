jQuery(document).on('ready',function(){

    // @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
    document.onkeyup = function(e) {

        // 18 : Alt
        // 66 : B
        // 67 : C
        // 82 : R
        
        // Enable / disable
        // Ctrl + Alt + R
        if( e.ctrlKey && e.altKey && e.which == 82 ){
            jQuery('body').toggleClass('wp-block-revealer');
        }

        // Copy classes
        // Ctrl + Alt + C
        if( e.ctrlKey && e.altKey && e.which == 67 ){
            
            if( jQuery('body').hasClass('wp-block-revealer') ){
                var block_classes = document.querySelector(".edit-post-visual-editor .is-hovered").classList ;
                try { wpbr_copyStringToClipboard( block_classes.value ); }
                catch (error) { console.error(error); }
            }
        }

    };

    // @source : https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
    function wpbr_copyStringToClipboard (str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
     }
    
});