<?php
/*
Plugin Name:  WP Block Revealer
Plugin URI:   https://m.pertici.fr/
Description:  —
Version:      0.1.0
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
    
    wp_enqueue_script( 'wp-block-revealer-script' , plugin_dir_url( __FILE__ ) . '/js/wp-block-revealer.js', array('jquery'), '1.0' );
    wp_enqueue_style( 'wp-block-revealer-style', plugin_dir_url( __FILE__ ) . '/css/wp-block-revealer.css', array(),false, 'all' );
}
add_action( 'admin_enqueue_scripts', 'wp_blckr_admin_scripts' );