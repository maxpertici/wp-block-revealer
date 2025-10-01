<?php

namespace MXP\BlockRevealer\Core;

final class App extends Plugin {

	/**
	 * Load the plugin
	 *
	 * @return void
	 */
	public function load() {
		add_action( 'plugins_loaded', [ $this, 'init' ] );
	}

	/**
	 * Init the plugin
	 *
	 * @return void
	 */
	public function init(){
		add_action('init', [ $this, 'loadTranslations' ]);
		add_action( 'enqueue_block_editor_assets', [ $this, 'editorEnqueues' ] );
	}


	/**
	 * Get Translations
	 *
	 * @return void
	 */
	public function loadTranslations(){
		$locale = get_user_locale();
		$locale = apply_filters( 'plugin_locale', $locale, 'wp-block-revealer' );
		load_textdomain( 'wp-block-revealer', WP_LANG_DIR . '/plugins/wp-block-revealer-' . $locale . '.mo' );
		load_plugin_textdomain( 'wp-block-revealer', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}


	/**
	 * Enqueue block editor assets.
	 */
	public function editorEnqueues(){

		if( ! is_admin() ){
			return ;
		}

		$plugin_path = untrailingslashit( $this->directoryPath );
		$plugin_url  = untrailingslashit( $this->pluginUrl );
		$asset_file = include untrailingslashit( $this->directoryPath ) . '/dist/block-revealer/editor.asset.php';

		wp_enqueue_script(
			'editor-block-revealer-scripts',
			$plugin_url . '/dist/block-revealer/editor.js',
			$asset_file['dependencies'],
			$asset_file['version'],
		);

		wp_localize_script( 'editor-block-revealer-scripts', 'customWidths', $this->settings ?? [] );

		wp_set_script_translations(
			'editor-block-revealer-scripts',
			'wp-block-revealer',
			$plugin_path . '/languages',
		);

		wp_enqueue_style(
			'editor-block-revealer-styles',
			$plugin_url . '/dist/block-revealer/editor.css',
		);

		// wp_add_inline_style( 'editor-block-revealer-styles', '' );

	}

}