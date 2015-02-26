import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  songName: DS.attr('string'),
  startNumber: DS.attr('number')
});
