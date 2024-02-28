<?php
define( 'WP_CACHE', true );








/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u167104691_cJdY9' );

/** Database username */
define( 'DB_USER', 'u167104691_jCACg' );

/** Database password */
define( 'DB_PASSWORD', 'KgvvGcL5Nx' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '8rAY%.AP(dDTMx~>kzg$WNVN^YuF{/IP(;Imjx;`37A:x&sN72lh.xYq,4/g*oai' );
define( 'SECURE_AUTH_KEY',   'J-h=0e9_#v={+1kyeYdWg5KL 9Q85Z@cfsdV>guKAN.C?cRVKXS.$;n_}WB#<6r/' );
define( 'LOGGED_IN_KEY',     '4+=QRm2>r&}QxyDk53Y0+5l@Bz_,T@&K5yZor7%~V1-(p:sV6JrG@GvsD9Te&)j-' );
define( 'NONCE_KEY',         'X0Prl!M@d.XmI9672sFR<9mmo^):X9x:#nC+$z<W[|*!8%@39v0-z1e.2?A^9!r.' );
define( 'AUTH_SALT',         'zzbUzaxpeMT2ln |esCo- H0/2R&%7@~)Nr$VqU4!oA&.Q[8Ji9Q#K~w4A;{7|hs' );
define( 'SECURE_AUTH_SALT',  'Yi)u(0cBWGJg7;?=;67_dfvro)/?`YLd);+$WLe9sa(?t/r=R-<&%oVHIA1,<RLw' );
define( 'LOGGED_IN_SALT',    '9u;>#_mXK=Uo6Epm@Aa)a}cc|b+av .31H-*(@LQp,LFPV _;y4)g]By9%di/Qn1' );
define( 'NONCE_SALT',        '-,a[>qZUzaxfim@??UK@.B$=HRh)=Kc{QDJ$UM3FKl-75xr%qOj.aN<m]4xB7wQZ' );
define( 'WP_CACHE_KEY_SALT', 'W>aCfmrIZnMVfrM+cSm6Y@M&3e5F(1|ha|RN14nJ!PzN0cdC3@(/WWl|TDt;v+He' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
