<?php
/*
Plugin Name:  Block Revealer
Plugin URI:   https://maxpertici.fr#block-revealer
Description:  Reveal blocks of Gutenberg Editor (Keyboard shortcut available : Ctrl + Alt + R).
Version:      1.9.2
Author:       @maxpertici
Author URI:   https://maxpertici.fr
Contributors:
License:      GPLv2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wp-block-revealer
Domain Path:  /languages/
Copyright 219-2021 Block Revealer
*/

defined( 'ABSPATH' ) or die();

// Plugin version
if( ! function_exists('get_plugin_data') ){ require_once( ABSPATH . 'wp-admin/includes/plugin.php' ); }
$wpblckr_plugin_data = get_plugin_data( plugin_dir_path( __FILE__ ) . 'wp-block-revealer.php', false, false ) ;
define( 'WPBLKR_VERSION' , $wpblckr_plugin_data['Version'] );


/**
 * First load with licence validation + hooks
 * @since 0.1.0
 */

function wp_blckr_load(){

	/**
	 * Fires when plugin is loaded
	 * @since 0.1.0
	*/
	do_action( 'wp_blckr_loaded' );
}

add_action( 'plugins_loaded', 'wp_blckr_load' );



/**
 * Init
 * @since 0.1.0
 */
function wp_blckr_setup() {

	// Translations
	$user_id = get_current_user_id();
	$locale = get_user_locale( $user_id );
	$locale = apply_filters( 'plugin_locale', $locale, 'wp-block-revealer' );

	$textdomain = load_plugin_textdomain( 'wp-block-revealer', false, dirname( plugin_basename( __FILE__ ) ) . '/languages'  );

	// Fires when plugin is loaded
	do_action( 'wp_blckr_ready' );
}

add_action( 'init', 'wp_blckr_setup' );




/**
 * Enqueues scripts & styles
 * @since 0.1.0
 */
function wp_blckr_block_assets() {

	wp_enqueue_style(  'wp-block-revealer', plugin_dir_url( __FILE__ ) . 'dist/block-revealer.css', array(), WPBLKR_VERSION, 'all' );

	$assets = plugin_dir_path( __FILE__ ) . 'dist/block-revealer.asset.php';
	wp_enqueue_script( 'wp-block-revealer', plugin_dir_url( __FILE__ ) . 'dist/block-revealer.js', $assets, WPBLKR_VERSION );

	wp_localize_script( 'wp-block-revealer', 'BlockRevealerVars',
		array(

			'translations' => [
				'reveal' => __('Reveal',  'wp-block-revealer'),
				'colors' => [
					'blue'  => __('Blue',  'wp-block-revealer'),
					'white'  => __('White',  'wp-block-revealer'),
					'black'  => __('Black',  'wp-block-revealer'),
				],
			]
		)
	);

}

add_action( 'enqueue_block_editor_assets', 'wp_blckr_block_assets' );
// add_action( 'enqueue_block_assets', 'wp_blckr_block_assets' );


