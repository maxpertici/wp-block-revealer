<?php
/*
Plugin Name:  Block Revealer
Plugin URI:   https://maxpertici.fr#block-revealer
Description:  Reveal blocks of Gutenberg Editor (Keyboard shortcut available : Ctrl + Alt + R).
Version:      2.0.0
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

use MXP\BlockRevealer\Core\App ;

require __DIR__ . '/vendor/autoload.php';

$app = App::instance();
$app->createFromFile( __FILE__ );
$app->load();
