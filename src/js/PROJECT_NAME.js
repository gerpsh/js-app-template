/* global define */

define([
    'underscore',
    './PROJECT_NAME/core',
    './PROJECT_NAME/models',
    './PROJECT_NAME/views',
    './PROJECT_NAME/templates',
    './PROJECT_NAME/setup'
], function(_, PROJECT_NAME, models, views, templates) {

    // Attach containers of models and ui (views) components
    PROJECT_NAME.models = models;
    PROJECT_NAME.views = views;
    PROJECT_NAME.templates = templates;

    // Update to additional asynchronous checks
    var checkReady = function() {
        return templates.ready();
    }

    // Initial check
    var ready = checkReady();

    // Takes a handler to call once PROJECT_LABEL has declared itself "ready".
    // Once PROJECT_NAME is ready, subsequent handlers will be executed
    // immediately.
    PROJECT_NAME.ready = function(handler) {
        if (ready) {
            if (handler) handler();
            return;
        }

        // Re-evalute ready status every 15 ms
        var intervalId = setInterval(function() {
            ready = checkReady();

            if (ready) {
                clearTimeout(timeoutId);
                clearTimeout(intervalId);
                PROJECT_NAME.trigger('ready', PROJECT_NAME);

                if (handler) handler();
            }
        }, 15);

        // Add a timeout in case there is a bug or something cause the components
        // never to be ready.
        var timeoutId = setTimeout(function() {
            clearTimeout(intervalId);

            PROJECT_NAME.notify({
                timeout: null,
                dismissable: false,
                level: 'error',
                header: 'Too long getting ready.',
                message: 'Sorry about that, a few of the components needed ' +
                         'to display the page took too longer to load. A ' +
                         '<a href="#" onclick="location.reload()">refresh</a> ' +
                         'sometimes resolves the issue.'
            });
        }, 500);
    };

    this.PROJECT_NAME = PROJECT_NAME;

    PROJECT_NAME.trigger('init', PROJECT_NAME);

    return PROJECT_NAME;

});
