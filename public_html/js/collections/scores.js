define([
    'backbone',
    'models/score'
], function(
    Backbone,
    Score
){

    var ScoresCollection = Backbone.Collection.extend({

        model: Score,
        url: '/api/scoreboard',

        comparator: function( collection ) {
            return ( -collection.get('score') );
        }
    });

    return new ScoresCollection();
});