/* global define */

define([
    'underscore',
    'backbone',
    'marionette',
    'jquery',
    'loglevel',
    './notify',
    './core'
], function(_, Backbone, Marionette, $, loglevel, notify, PROJECT_NAME) {

    // Extend Marionette template loader facilities to use PROJECT_LABEL template API
    var defaultLoadTemplate = Marionette.TemplateCache.prototype.loadTemplate,
        defaultCompileTemplate = Marionette.TemplateCache.prototype.compileTemplate;

    // Override to get in the template cache
    Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
        var func = PROJECT_NAME.templates.get(templateId);
        if (!func) func = defaultLoadTemplate.call(this, templateId);
        return func;
    };

    // Prevent re-compiling already compiled templates
    Marionette.TemplateCache.prototype.compileTemplate = function(template) {
        if (typeof template !== 'function') {
            template = defaultCompileTemplate(template);
        }
        return template;
    };

    // Initialize notification stream and append it to the body
    var stream = new notify.Notifications({
        id: 'PROJECT_NAME-notifications'
    });

    $('body').append(stream.render().el);

    // Add public method
    PROJECT_NAME.notify = stream.notify;

    // Support cross origin requests with credentials (i.e. cookies)
    // See http://www.html5rocks.com/en/tutorials/cors/
    $.ajaxPrefilter(function(settings) {
        settings.xhrFields = {
            withCredentials: true
        };
    });

    // Setup debugging facilities
    if (PROJECT_NAME.config.get('debug')) {
        loglevel.setLevel('debug');

        PROJECT_NAME.on('all', function() {
            loglevel.info.apply(loglevel.info, [].slice.call(arguments, 0));
        });
    }

    // Relies on the jquery-ajax-queue plugin to supply this method.
    // This ensures data is not silently lost
    $(window).on('beforeunload', function() {
        if (PROJECT_NAME.config.get('debug')) {
            // Turn off ajax error handling to prevent unwanted notifications displaying
            $(document).off('ajaxError');
            return;
        }

        /* Add conditional if there are pending requests
         *
        return "Wow, you're quick! Your data is being saved. " +
               "It will only take a moment.";
         */
    });

    $(document).ajaxError(function(event, xhr, settings, exception) {
        // A statusText value of 'abort' is an aborted request which is
        // usually intentional by the app or from a page reload.
        if (xhr.statusText === 'abort') return;

        var message = '';

        if (xhr.status === 0 && exception === '') {
            // An empty exception value is an unknown error which usually
            // means the server is unavailable.
            message = 'The application is no longer responding.';
        } else {
            // General purpose error message
            message = 'There is a communication problem with the server. ' +
                '<a href="#" onclick="location.reload()">Refreshing</a> ' +
                'the page may help.';
        }

        PROJECT_NAME.notify({
            timeout: null,
            dismissable: false,
            level: 'error',
            header: 'Uh oh.',
            message: message
        });
    });

    // Page visibility API: http://stackoverflow.com/a/1060034/407954
    var hidden = 'hidden';

    var visibilityMap = {
        focus: true,
        focusin: true,
        pageshow: true,
        blur: false,
        focusout: false,
        pagehide: false
    };

    function onchange (event) {
        event = event || window.event;

        var isVisible;

        // Map visibility
        if (event.type in visibilityMap) {
            isVisible = visibilityMap[event.type];
        } else {
            isVisible = !this[hidden];
        }

        // Trigger 'visible' and 'hidden' events on PROJECT_NAME
        if (isVisible === true) {
            PROJECT_NAME.trigger('visible');
        } else if (isVisible === false) {
            PROJECT_NAME.trigger('hidden');
        }
    }

    // Standards
    if (hidden in document) {
        document.addEventListener('visibilitychange', onchange);
    } else if ((hidden = 'mozHidden') in document) {
        document.addEventListener('mozvisibilitychange', onchange);
    } else if ((hidden = 'webkitHidden') in document) {
        document.addEventListener('webkitvisibilitychange', onchange);
    } else if ((hidden = 'msHidden') in document) {
        document.addEventListener('msvisibilitychange', onchange);
    // IE 9 and lower
    } else if ('onfocusin' in document) {
        document.onfocusin = document.onfocusout = onchange;
    // All others
    } else {
        window.onpageshow = window.onpagehide =
            window.onfocus = window.onblur = onchange;
    }

});
