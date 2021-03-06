jQuery(document).on('ready',function(){


    /**
     * 
     * Get storage and check options on launch
     * 
     */
    
    function wpbr_storage_setup(){

        var _wpbr_storage = window.localStorage ;
        var _launch_ls_wpbr_options__reveal = _wpbr_storage.getItem('wpbr_options__reveal') ;
    
        if( _launch_ls_wpbr_options__reveal === 'true' ){
            jQuery('#wpbkr-toogle-reveal').trigger('click');
        }
    }



    /**
     * 
     * 
     * 
     * 
     */
    // @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e
    document.onkeyup = function(e) {

        // 18 : Alt
        // 66 : B
        // 67 : C
        // 82 : Ruto
        
        // Enable / disable
        // Ctrl + Alt + R
        if( e.ctrlKey && e.altKey && e.which == 82 ){

            console.log('wpbr');
            
            // $('body').toggleClass('wp-block-revealer');
            jQuery('#wpbkr-toogle-reveal').trigger('click');
        }

        // Copy classes
        // Ctrl + Alt + C
        if( e.ctrlKey && e.altKey && e.which == 67 ){
            
            // wpbr_cash_css_classes();
            jQuery('#wpbkr-button-copy-classes').trigger('click');

            /*
            if( $('body').hasClass('wp-block-revealer--reveal') ){
                var block_classes = document.querySelector(".edit-post-visual-editor .is-hovered").classList ;
                try { wpbr_copyStringToClipboard( block_classes.value ); }
                catch (error) { console.error(error); }
            }
            */

            // Next
            // someNodeList.forEach(callback[, thisArg]);
            // check modules :  *__modules
            // get classes + TAB

        }

    };

    /**
     * 
     * 
     * 
     * 
     */
    function wpbr_cash_css_classes(){

        var _target_classes = jQuery('.edit-post-visual-editor .is-selected').attr('class') ;
        if( _target_classes == null ){
            _target_classes = jQuery('.edit-post-visual-editor .is-hovered').attr('class') ; 
        }

        if( _target_classes != null ){
            try { wpbr_copyStringToClipboard( _target_classes ); }
            catch (error) { console.error(error); }
        }
    }





    /**
     * 
     * 
     * 
     * 
     */



    /**
     * 
     * 
     * 
     */
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
   

    /**
     * 
     * 
     * 
     * 
     */
    
    function wpbr_toggle_option(){

        jQuery('.wp-block-revealer-options__toggle input').click(function(e){
            
            var _wpbr_storage = window.localStorage ;
            
            if( jQuery(this).is( ":checked" ) ){
                jQuery(this).parent().addClass('option-active');
                jQuery('body').addClass('wp-block-revealer--reveal');
                _wpbr_storage.setItem( 'wpbr_options__reveal', 'true' );
                
            }else{
                jQuery(this).parent().removeClass('option-active');
                jQuery('body').removeClass('wp-block-revealer--reveal');
                _wpbr_storage.setItem( 'wpbr_options__reveal', 'false' );
            }
            
        });
    }


    function wpbr_feature_button(){

        jQuery('.wp-block-revealer-options__button input').click(function(e){
            wpbr_cash_css_classes();
        });
    }



    /**
     * 
     * Launch panel
     * UI
     * 
     */
    
    wpbr_add_settings_panel();

    // v02
    var _wpbkr_html_panel  = '<form class="wp-block-revealer-options__form">';

    _wpbkr_html_panel += '<span class="wp-block-revealer-options__toggle">';
    _wpbkr_html_panel += '<input type="checkbox" id="wpbkr-toogle-reveal" name="wpbkr-toogle"><label for="wpbkr-toogle-reveal">'+wpbr_words.option_reveal_block_label+'</label>';
    _wpbkr_html_panel += '</span>';
    _wpbkr_html_panel += '</form>';

    
    function wpbr_add_settings_panel(){

        // console.log( $('.interface-interface-skeleton__content') );

        setTimeout(function(){
            
            if( jQuery('.edit-post-header-toolbar').length > 0   ){
                
                // Ready — launch
                jQuery('body').addClass('wp-block-revealer');
                jQuery('.edit-post-header-toolbar').after( '<div class="wp-block-revealer__toolbar">'+_wpbkr_html_panel+'</div>' );
                wpbr_toggle_option();
                wpbr_storage_setup();


                /*
                // v01
                jQuery('.interface-interface-skeleton__content').prepend( '<div class="wp-block-revealer-options">'+_wpbkr_html_panel+'</div>' );
                wpbr_toggle_option();
                wpbr_feature_button();
                wpbr_storage_setup();
                */
                

            }else{
                wpbr_add_settings_panel();
            }
            
    
        }, 330);    
    }



});