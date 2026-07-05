<?php
/**
 * Singleton utility class.
 */

namespace MXP\BlockRevealer\Utils;

/**
 * Implements the Singleton pattern.
 */
abstract class Singleton {

	/**
	 * Constructor.
	 *
	 * To override in child classes.
	 */
	protected function __construct() {
		// To override in child classes.
	}

	/**
	 * Prevent cloning.
	 */
	private function __clone() {}

	/**
	 * Return the current instance of the child class
	 *
	 * @return static the child class
	 */
	final public static function instance(): static {
		static $_instance = [];

		$called_class = get_called_class();

		if ( ! array_key_exists( $called_class, $_instance ) ) {
			$_instance[ $called_class ] = new $called_class();
		}

		return $_instance[ $called_class ];
	}
}
