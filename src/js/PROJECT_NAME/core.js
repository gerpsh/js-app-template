/* global define */

define([
    'underscore',
    'backbone',
    './config',
    './utils',
], function(_, Backbone, config, utils) {

    var PROJECT_NAME = {
        // Version of PROJECT_NAME
        version: '0.1.0-beta',

        // Initialize the session manager and default configuration
        config: new config.Config(this.PROJECT_NAME),

        // Attach commonly used utilities
        utils: utils,
    };

    // Give the PROJECT_NAME events
    _.extend(PROJECT_NAME, Backbone.Events);

    return PROJECT_NAME;
});
