define([
    'backbone',
    'tmpl/registration'
], function(
    Backbone,
    tmpl
){

    var View = Backbone.View.extend({
        events: {
            "click #go-back":   "goBack",
            "click #submit": "submit"
        },

        template: tmpl,
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        show: function () {
            $('#page').html(this.$el);
        },
        hide: function () {
            // TODO
        },
        goBack: function() {
            Backbone.history.history.back()
        },
        submit: function(e) {
            e.preventDefault();
        }
    });

    return new View();
});