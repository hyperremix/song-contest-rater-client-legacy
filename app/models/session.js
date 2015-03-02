import DS from 'ember-data';

export default DS.Model.extend({
  raterId: DS.attr('string'),
  isAuthenticated: DS.attr('boolean', {defaultValue: false})
});
