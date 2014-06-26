/* global require */

require({
    config: {
        tpl: {
            variable: 'data'
        }
    },
    shim: {
        bootstrap: ['jquery']
    }
}, ['jquery', 'PROJECT_NAME'], function($, PROJECT_NAME) {

    PROJECT_NAME.ready(function() {

        var welcome = new PROJECT_NAME.views.Welcome();
        welcome.render();
        $('#main').html(welcome.el);

    });

});
