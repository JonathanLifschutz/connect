/* global process */

/**
 * Module dependencies
 */

var User = require('../models/User')
var AnvilConnectKeys = require('anvil-connect-keys')
var keygen = new AnvilConnectKeys()

/**
 * Check if server is in out-of-box mode
 */

function isOOB (cb) {
  User.listByRoles('authority', function (err, users) {
    if (err) { return cb(err) }
    // return true if there are no authority users
    return cb(null, !users || !users.length)
  })
}

exports.isOOB = isOOB

/**
 * Read setup token from filesystem or create if missing
 */

function readSetupToken (cb) {
  var token

  try {
    // try to read setup token from filesystem
    token = keygen.loadSetupToken()

    // token is blank
    if (!token.trim()) {
      cb(new Error('Setup token is blank'), null)
    }
  } catch (err) {
    // cannot read token from disk
    return cb(err, null)
  }

  // return the token
  cb(null, token)
}
exports.readSetupToken = readSetupToken
