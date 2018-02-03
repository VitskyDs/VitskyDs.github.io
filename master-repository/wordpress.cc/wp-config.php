<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'exerciseDBshmse');

/** MySQL database username */
define('DB_USER', 'exerciseDBshmse');

/** MySQL database password */
define('DB_PASSWORD', 'o119Fckqwl');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'N,0Q3F>v}7^nvck,nvYjMUnQcFM3QbE{3^<B>yfn<yfqTbuXfMUAXjP2A<AI3*');
define('SECURE_AUTH_KEY',  '2lxe5D#:-_lt_pxahKSp-dlOV8GWdGO5~#CK:8![s-[1-_oRZw@goVdGNdkNV8G:J');
define('LOGGED_IN_KEY',    ':_p-]1-hpSaw_lsWCKahKS9G[1O5C|:w!19_owZh![sZhKRhoRZGO1RZCJ}4@|4G[');
define('NONCE_KEY',        's@>vcJRkRcF}8YBN0@>7,0zgr>v^nQcvcJUBbjQ7E{FM3^>v{7,qyfu^jQbEM<u$i');
define('AUTH_SALT',        '#aKOZCG[1ow-dkNV4CRZdGO18~|CJN08!|ow|:1-!ksRZv@gksVcFNZgJRV8F|}JR');
define('SECURE_AUTH_SALT', '^zj^nYFQI6<u<u^nTu*qXEXjP6E{L2.;+6.qXe*mxeLeqTAL2SaH;+#A#t*m#t~');
define('LOGGED_IN_SALT',   '#-hp|:1-_lpSZpt-dlKS5CGdlOR4C|[1GO:5~|os-08@|ow-dk-!hsRZCKN|}vzck');
define('NONCE_SALT',       'R![GN08![:w@:4-!kswZg@|osVcFJRgoNV8G[04RY8F>0z@,4C!}rzck^,}v@cjNU');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);define('FS_METHOD', 'direct');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
