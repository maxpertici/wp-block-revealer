<?php

namespace MXP\BlockRevealer\Core;

use MXP\BlockRevealer\Utils\Singleton;

class Plugin extends Singleton {

	public $version = '' ;
	protected $pluginUrl = null ;
	protected $directoryPath = null ;
	protected $mainPluginFilePath = null ;

	public function createFromFile(  $mainPluginFilePath = null  ){
		
		if( is_null( $mainPluginFilePath ) ){ return ; }
		$this->mainPluginFilePath = $mainPluginFilePath ;

		$this->setDirectoryPath( $mainPluginFilePath ) ;
		$this->setPluginUrl();
		
		add_action('init', [$this, 'setVersion']);
	}

	public function setVersion(){
		if( ! function_exists('get_plugin_data') ){
			require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		}
		$plugin_data = get_plugin_data( $this->directoryPath . 'wp-block-revealer.php' ) ;
		$this->version = $plugin_data['Version'] ;
	}

	private function setPluginUrl() {
		if( is_null($this->directoryPath) ){ return ; }
		$this->pluginUrl = trailingslashit( plugin_dir_url( $this->directoryPath ) . 'wp-block-revealer' ) ;
	}

	private function setDirectoryPath( $mainPluginFilePath ){
		$this->directoryPath = trailingslashit( dirname( $mainPluginFilePath ) );
	}

	public function getVersion(){
		return $this->version;
	}

	public function getDirectoryPath(){
		return $this->directoryPath;
	}
}