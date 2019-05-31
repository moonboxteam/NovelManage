'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_URL: '"http://localhost:8090/cms"',
  BASE_URL: '"https://cc:3001/cms/h5"',
  BASE_ROUTER: '"   "'
})
