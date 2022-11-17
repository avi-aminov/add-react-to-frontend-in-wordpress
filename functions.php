<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


// Enqueue Theme JS w React Dependency
add_action( 'wp_enqueue_scripts', 'my_enqueue_theme_js' );
function my_enqueue_theme_js() {
  	wp_enqueue_script(
		'react-app-frontend-script',
		get_stylesheet_directory_uri() . '/build/index.js',
		['wp-element'],
		time(), // Change this to null for production
		true
  	);

	 // Localizer
	 wp_localize_script(
		'react-app-frontend-script',
		'appLocalizer',
		[ 'apiUrl' => home_url('/wp-json'), 'nonce' => wp_create_nonce( 'wp_rest' ), 'id' => get_queried_object_id()]
	);

  	wp_enqueue_style( 'react-app-frontend-style',
	  	get_stylesheet_directory_uri() . '/build/index.css',
		[],
		time() //For production use wp_get_theme()->get('Version')
	);
}