/* global process */

/**
 * Module dependencies
 */

var AnvilConnectKeys = require('anvil-connect-keys')

/**
 * Create a keypair client
 */

var keygen = new AnvilConnectKeys()

/**
 * Attempt to load the key pairs
 */

var keys
try { keys = keygen.loadKeyPairs() } catch (e) {}

/**
 * Export
 */

module.exports = keys
