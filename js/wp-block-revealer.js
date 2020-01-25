jQuery(document).ready(function($){

    // @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
    document.onkeyup = function(e) {

        // 18 : Alt
        // 66 : B
        // 82 : R

        // console.log( e );
        
        if( e.ctrlKey && e.altKey && e.which == 82 ){
            $('body').toggleClass('wp-block-revealer');
        }

    };
      
});