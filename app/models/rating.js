import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr('string'),
  rater: DS.attr('string'),
  song: DS.attr('number'),
  singing: DS.attr('number'),
  show: DS.attr('number'),
  looks: DS.attr('number'),
  clothes: DS.attr('number')
});
