/* global define */

define([
    'jquery',
    'loglevel'
], function($, loglevel) {

    // Convenience method for getting a value using the dot-notion for
    // accessing nested structures.
    var getDotProp = function(obj, key, def) {
        var toks = key.split('.');

        for (var i = 0; i < toks.length; i++) {
            obj = obj[toks[i]];

            if (obj === undefined) {
                return def;
            }
        }
        // Final value of obj is returned
        if (typeof obj === 'function') {
            return obj.apply();
        }
        else {
            return obj;
        }
    };

    // Convenience method for setting a value using the dot-notion for
    // accessing nested structures.
    var setDotProp = function(obj, key, value) {
        if (typeof key === 'object') {
            // Second argument is a boolean to whether or not to replace
            // the options
            if (value === true) {
                return $.extend(true, {}, key);
            }
            return $.extend(true, obj, key);
        }

        var toks = key.split('.'),
            last = toks.pop();

        for (var t, i = 0; i < toks.length; i++) {
            t = toks[i];

            if (obj[t] === undefined) {
                obj[t] = {};
            }
            obj = obj[t];
        }
        obj[last] = value;
    };

    var pprint = function(obj) {
        loglevel.debug(JSON.stringify(obj, null, 4));
    };

    return {
        pprint: pprint,
        getDotProp: getDotProp,
        setDotProp: setDotProp
    };
});
