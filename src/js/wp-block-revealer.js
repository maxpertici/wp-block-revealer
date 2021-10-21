jQuery(document).on( 'ready', function(){


    // Check if gutenberg exist
    if( typeof wp.data == 'undefined' ){ return ; }


    /** 
     * Get storage and check options on launch
     */
    function wpbkr_storage__setup(){

        var wpbr_storage = window.localStorage ;
        
        var launch_wpbkr__color  = wpbr_storage.getItem('wpbr_options__color') ;
        if(
            launch_wpbkr__color === 'blue'  ||
            launch_wpbkr__color === 'white' ||
            launch_wpbkr__color === 'black' ){
                wpkr_set__color( launch_wpbkr__color );
        }
        
        var launch_wpbkr__reveal = wpbr_storage.getItem('wpbr_options__reveal') ;
        if( launch_wpbkr__reveal === 'true' ){
            jQuery('#wpbkr-toogle-reveal').trigger('click');
        }
    }


    /**
     * Handle shortcut
     * Enable / disable
     * @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
     */
    function wpbkr_keyboard__bind(){
        
        document.onkeyup = function(e) {
            // Ctrl + Alt + R
            if( e.ctrlKey && e.altKey && e.which == 82 ){
                jQuery('#wpbkr-toogle-reveal').trigger('click');
            }
        };
    }


    /**
     * Overide css color variable
     */
    function wpkr_set__color( color ){

        jQuery( 'body' )
            .css( '--wpbr--editor--shadow--color', 'var( --wpbr--color--'+color+' )' )
            .css( '--wpbr--editor--shadow--color-hover', 'var( --wpbr--color--'+color+'-hover )' );
    }

    /**
     * Handle toggles : bind clicks
     */
    function wpbkr_options__toggle(){

        jQuery('.wp-block-revealer-options__toggle input').on( 'click', function(e){
            
            var wpbr_storage = window.localStorage ;
            
            if( jQuery(this).is( ":checked" ) ){
                jQuery(this).parent().addClass('option-active');
                jQuery('body').addClass('wp-block-revealer--reveal');
                wpbr_storage.setItem( 'wpbr_options__reveal', 'true' );
                
            }else{
                jQuery(this).parent().removeClass('option-active');
                jQuery('body').removeClass('wp-block-revealer--reveal');
                wpbr_storage.setItem( 'wpbr_options__reveal', 'false' );
            }
            
        });


        jQuery('.wp-block-revealer-options__toggle').on( 'click', '.wp-block-revealer-options__color', function(e){
            
            e.preventDefault();
            wpkr_set__color( jQuery(this).data('color') );
            var wpbr_storage = window.localStorage ;
            wpbr_storage.setItem( 'wpbr_options__color', jQuery(this).data('color') );

            return false;

        });

    }


    /**
     * Launch UI
     */

    var wpbkr_form__html  = '<form class="wp-block-revealer-options__form">';
        
        wpbkr_form__html += '<div class="wp-block-revealer-options__toggle">';
            
            wpbkr_form__html += '<input type="checkbox" id="wpbkr-toogle-reveal" name="wpbkr-toogle">';
            wpbkr_form__html += '<label for="wpbkr-toogle-reveal"><span class="screen-reader-text">' + wpbr_words.options__reveal_block_label + '</span></label>';

            wpbkr_form__html += '<div class="wp-block-revealer-options__color-swatch">';
                wpbkr_form__html += '<button data-color="blue"  class="wp-block-revealer-options__color wp-block-revealer-options__color--blue"></button>';
                wpbkr_form__html += '<button data-color="white" class="wp-block-revealer-options__color wp-block-revealer-options__color--white"></button>';
                wpbkr_form__html += '<button data-color="black" class="wp-block-revealer-options__color wp-block-revealer-options__color--black"></button>';
            wpbkr_form__html += '</div>';

            wpbkr_form__html += '<div class="wp-block-revealer-options__indicator"></div>';

        wpbkr_form__html += '</div>';

        wpbkr_form__html += '</form>';


    const { subscribe } = wp.data ;
    // subscription method : https://github.com/WordPress/gutenberg/issues/10992
    
    window.WPBKR = {};
    window.WPBKR.editor_is_ready = false ;
    window.WPBKR.watch = false ;
    
    const edior_is_ready_subscription = subscribe( () => {

        let _blocks = wp.data.select('core/block-editor').getBlocks() ;
        
        // has blocks, editor seems ready : launch once
        if( ( _blocks.constructor === Array ) ){

            if( window.WPBKR.watch === false ){

                if( jQuery('.edit-post-header-toolbar').length > 0 ){

                    window.WPBKR.editor_is_ready = true ;
                    window.WPBKR.watch = true;

                    setTimeout(function(){
                        // Ready — launch
                        jQuery('body').addClass('wp-block-revealer');
                        jQuery('.edit-post-header-toolbar').after( '<div class="wp-block-revealer__toolbar">' + wpbkr_form__html + '</div>' );

                        wpbkr_keyboard__bind();

                        wpbkr_options__toggle();
                        wpbkr_storage__setup();


                    }, 80);
                }
            }
        }
    });


});