<?php
/*
Plugin Name:  WP Block Revealer
Plugin URI:   https://m.pertici.fr/en/wp-block-revealer/
Description:  Reveal blocks of Gutenberg Editor (shortcut avaible with Ctrl + Alt + R).
Version:      1.5
Author:       Maxime Pertici
Author URI:   https://maxpertici.fr
Contributors:
License:      GPLv2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wp-block-revealer
Domain Path:  /languages/
Copyright 219-2021 WP Block Revealer
*/

defined( 'ABSPATH' ) or	die();

// Plugin version
if( ! function_exists('get_plugin_data') ){ require_once( ABSPATH . 'wp-admin/includes/plugin.php' ); }
$wpblckr_plugin_data = get_plugin_data( plugin_dir_path( __FILE__ ) . 'wp-block-revealer.php', false, false ) ;
define( 'WPBLKR_VERSION' , $wpblckr_plugin_data['Version'] );

/**
 * Tell WP what to do when plugin is activated.
 *
 * @since 0.1.0
 */
function wp_blckr_activation() {}
register_activation_hook( __FILE__, 'wp_blckr_activation' );



/**
 * Tell WP what to do when plugin is deactivated.
 *
 * @since 0.1.0
 */
function wp_blckr_deactivation(){}
register_deactivation_hook( __FILE__, 'wp_blckr_deactivation' );


/**
 * First load with licence validation + hooks
 *
 * @since 0.1.0
 */

function wp_blckr_load(){

    require_once( 'inc/block-editor.php' );
    
    
    /**
     * Fires when plugin is loaded
     * @since 0.1.0
    */
    do_action( 'wp_blckr_loaded' );

}

add_action( 'plugins_loaded', 'wp_blckr_load' );



/**
 * Init
 *
 * @since 0.1.0
 */
function wp_blckr_setup() {

    // Translations
	$locale = get_locale();
	$locale = apply_filters( 'plugin_locale', $locale, 'wp-block-revealer' );
    // $load_plugin_textdomain = load_plugin_textdomain( 'wp-block-revealer', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	$load_textdomain = load_textdomain( 'wp-block-revealer', WP_LANG_DIR . '/plugins/wp-block-revealer-' . $locale . '.mo' );


    /**
     * Fires when plugin is loaded
     * @since 0.1.0
    */
    do_action( 'wp_blckr_ready' );
}

add_action( 'after_setup_theme', 'wp_blckr_setup' );




/**
 * Enqueues scripts & styles
 * @since 0.1.0
 */
function wp_blckr_admin_scripts( $hook ) {
    
    $screen = get_current_screen();
    
    if( is_admin() && ( $screen->base == 'post' ) && wp_blckr_gutenberg_is_active() ){

        
        wp_enqueue_script( 'wp-block-revealer' , plugin_dir_url( __FILE__ ) . '/dist/wp-block-revealer.build.js', array('jquery'), WPBLKR_VERSION );
        wp_localize_script( 'wp-block-revealer', 'wpbr_words',
            array( 
                'options__reveal_block_label' => __('Reveal blocks','wp-block-revealer'),
                'option_copy_classes_label' => __('Copy CSS class','wp-block-revealer'),
            )
        );
        
        wp_enqueue_style(  'wp-block-revealer'  , plugin_dir_url( __FILE__ ) . '/dist/wp-block-revealer.css', array(), WPBLKR_VERSION, 'all' );
    }
}

add_action( 'admin_enqueue_scripts', 'wp_blckr_admin_scripts' );
