<?php
/*
Plugin Name:  WP Block Revealer
Plugin URI:   https://m.pertici.fr/wp-block-revealer
Description:  Reveal blocks of Gutenberg Editor with Ctrl + Alt + R keyboard shortcut.
Version:      1.2
Author:       Maxime Pertici
Author URI:   https://m.pertici.fr
Contributors:
License:      GPLv2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wp-block-revealer
Domain Path:  /languages
Copyright 219-2020 WP Block Revealer
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
function wp_blckr_activation() {

}

register_activation_hook( __FILE__, 'wp_blckr_activation' );



/**
 * Tell WP what to do when plugin is deactivated.
 *
 * @since 0.1.0
 */
function wp_blckr_deactivation(){

}

register_deactivation_hook( __FILE__, 'wp_blckr_deactivation' );


/**
 * First load with licence validation + hooks
 *
 * @since 0.1.0
 */

function wp_blckr_load(){

	// Translations
	$locale = get_locale();
	$locale = apply_filters( 'plugin_locale', $locale, 'wp-block-revealer' );
	load_textdomain( 'wp-block-revealer', WP_LANG_DIR . '/plugins/wp-block-revealer-' . $locale . '.mo' );
	load_plugin_textdomain( 'wp-block-revealer', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

    /**
     * Fires when plugin is loaded
     *
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

    // Do some stuffs
    

    /**
     * Fires when plugin is loaded
     *
     * @since 0.1.0
    */
    do_action( 'wp_blckr_ready' );
	
}

add_action( 'after_setup_theme', 'wp_blckr_setup' );


function wp_blckr_admin_scripts( $hook ) {
    
    if( wp_blckr_gutenberg_is_active() ){
        wp_enqueue_script( 'wp-block-revealer-script' , plugin_dir_url( __FILE__ ) . '/js/wp-block-revealer.js', array('jquery'), WPBLKR_VERSION );
        wp_enqueue_style(  'wp-block-revealer-style'  , plugin_dir_url( __FILE__ ) . '/css/wp-block-revealer.css', array(), WPBLKR_VERSION, 'all' );
    }
}

add_action( 'admin_enqueue_scripts', 'wp_blckr_admin_scripts' );




/**
 * 
 * 
 * 
 * @source : https://wordpress.stackexchange.com/questions/320653/how-to-detect-the-usage-of-gutenberg
 * 
 */

 /**
 * Check if Block Editor is active.
 * Must only be used after plugins_loaded action is fired.
 *
 * @return bool
 */
function wp_blckr_gutenberg_is_active() {
    // Gutenberg plugin is installed and activated.
    $gutenberg = ! ( false === has_filter( 'replace_editor', 'gutenberg_init' ) );

    // Block editor since 5.0.
    $block_editor = version_compare( $GLOBALS['wp_version'], '5.0-beta', '>' );

    if ( ! $gutenberg && ! $block_editor ) {
        return false;
    }

    if ( wp_blckr_is_classic_editor_plugin_active() ) {
        $editor_option       = get_option( 'classic-editor-replace' );
        $block_editor_active = array( 'no-replace', 'block' );

        return in_array( $editor_option, $block_editor_active, true );
    }

    return true;
}

/**
 * Check if Classic Editor plugin is active.
 *
 * @return bool
 */
function wp_blckr_is_classic_editor_plugin_active() {
    if ( ! function_exists( 'is_plugin_active' ) ) {
        include_once ABSPATH . 'wp-admin/includes/plugin.php';
    }

    if ( is_plugin_active( 'classic-editor/classic-editor.php' ) ) {
        return true;
    }

    return false;
}