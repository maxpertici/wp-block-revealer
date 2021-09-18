jQuery(document).on('ready',function(){


    /** 
     * Get storage and check options on launch
     */
    
    function wpbr_storage_setup(){

        var wpbr_storage = window.localStorage ;
        var _launch_ls_wpbr_options__reveal = wpbr_storage.getItem('wpbr_options__reveal') ;
    
        if( _launch_ls_wpbr_options__reveal === 'true' ){
            jQuery('#wpbkr-toogle-reveal').trigger('click');
        }
    }



    /**
     * 
     * @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
     */
    document.onkeyup = function(e) {

        // 18 : Alt
        // 66 : B
        // 67 : C
        // 82 : R
        
        // Enable / disable
        // Ctrl + Alt + R
        if( e.ctrlKey && e.altKey && e.which == 82 ){

            // console.log('wpbr');
            
            // $('body').toggleClass('wp-block-revealer');
            jQuery('#wpbkr-toogle-reveal').trigger('click');
        }

    };




    /**
     * 
     * 
     * 
     * 
     */

    function wpbr_toggle_option(){

        jQuery('.wp-block-revealer-options__toggle input').click(function(e){
            
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
    }


    /**
     * Launch UI
     */

    var wpbkr_form__html  = '<form class="wp-block-revealer-options__form">';
        wpbkr_form__html += '<span class="wp-block-revealer-options__toggle">';
        wpbkr_form__html += '<input type="checkbox" id="wpbkr-toogle-reveal" name="wpbkr-toogle"><label for="wpbkr-toogle-reveal">'+wpbr_words.option_reveal_block_label+'</label>';
        wpbkr_form__html += '</span>';
        wpbkr_form__html += '</form>';


    // subscription method : https://github.com/WordPress/gutenberg/issues/10992
    
    const { subscribe } = wp.data ;
    
    window.WPBR = {};
    window.WPBR.editor_is_ready = false ;
    window.WPBR.watch = false ;
    
    const edior_is_ready_subscription = subscribe( () => {

        let _blocks = wp.data.select('core/block-editor').getBlocks() ;
        
        // has blocks, editor is ready : launch once
        // if( ( _blocks.constructor === Array ) && (_blocks.length > 0 ) ){
        if( ( _blocks.constructor === Array ) ){

            
            if( jQuery('.edit-post-header-toolbar').length > 0 ){

                window.WPBR.editor_is_ready = true ;

                if( window.WPBR.watch === false ){
                    window.WPBR.watch = true;

                    setTimeout(function(){
                        // Ready — launch
                        jQuery('body').addClass('wp-block-revealer');
                        jQuery('.edit-post-header-toolbar').after( '<div class="wp-block-revealer__toolbar">' + wpbkr_form__html + '</div>' );
                        wpbr_toggle_option();
                        wpbr_storage_setup();
                    }, 100);
                    
                }
            }
        }
    });


});