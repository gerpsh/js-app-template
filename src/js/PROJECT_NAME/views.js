/* global define */

define([
    'marionette'
], function(Marionette) {

    var Welcome = Marionette.ItemView.extend({
        template: 'welcome',

        serializeData: function() {
            return {
                projectLabel: 'PROJECT_LABEL'
            };
        }
    });

    return {
        Welcome: Welcome
    };

});
