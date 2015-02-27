import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  songName: DS.attr('string'),
  startNumber: DS.attr('number'),
  ratings: DS.attr(),
  totalRating: function() {
    var ratings = this.get('ratings');
    return ratings.reduce(function(previousValue, rating){
        return previousValue + rating.song + rating.singing + rating.show + rating.looks + rating.clothes;
    }, 0);
  }.property("ratings.@each")
});
