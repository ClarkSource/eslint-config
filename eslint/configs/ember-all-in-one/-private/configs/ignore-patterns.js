'use strict';

module.exports = {
  ignorePatterns: [
    // unconventional js
    '/blueprints/*/files/',
    '/vendor/',

    // compiled output
    '/dist/',
    '/tmp/',
    '/DEBUG/',

    // dependencies
    '/bower_components/',
    '/node_modules/',

    // misc
    '/coverage/',
    '!.*',

    // ember-try
    '/.node_modules.ember-try/',
    '/bower.json.ember-try',
    '/package.json.ember-try',
  ],
};
