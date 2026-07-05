<?php

namespace MXP\BlockRevealer\Core;

use MXP\BlockRevealer\Utils\Singleton;

class Plugin extends Singleton {

	public $version = '' ;
	protected $pluginUrl = null ;
	protected $directoryPath = null ;
	protected $mainPluginFilePath = null ;

	/**
	 * Create plugin instance from main plugin file.
	 *
	 * @param string|null $mainPluginFilePath
	 * @return void
	 */
	public function createFromFile(  $mainPluginFilePath = null  ): void {
		if( is_null( $mainPluginFilePath ) ){ return ; }

		$this->mainPluginFilePath = $mainPluginFilePath ;
		$this->setDirectoryPath( $mainPluginFilePath ) ;
		$this->setPluginUrl();
		add_action('init', [$this, 'setVersion']);
	}

	/**
	 * Set plugin version from main plugin file.
	 *
	 * @return void
	 */
	public function setVersion(): void{
		if( ! function_exists('get_plugin_data') ){
			require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		}
		$plugin_data = get_plugin_data( $this->directoryPath . 'wp-block-revealer.php' ) ;
		$this->version = $plugin_data['Version'] ;
	}

	/**
	 * Set plugin URL.
	 *
	 * @return void
	 */
	private function setPluginUrl(): void {
		if( is_null($this->directoryPath) ){ return ; }
		$this->pluginUrl = trailingslashit( plugin_dir_url( $this->directoryPath ) . 'wp-block-revealer' ) ;
	}

	/**
	 * Set plugin directory path.
	 *
	 * @param string $mainPluginFilePath
	 * @return void
	 */
	private function setDirectoryPath( $mainPluginFilePath ): void {
		$this->directoryPath = trailingslashit( dirname( $mainPluginFilePath ) );
	}

	/**
	 * Get plugin Version.
	 *
	 * @return string
	 */
	public function getVersion(): string {
		return $this->version;
	}

	/**
	 * Get plugin directory path.
	 *
	 * @return string
	 */
	public function getDirectoryPath(): string {
		return $this->directoryPath;
	}
}