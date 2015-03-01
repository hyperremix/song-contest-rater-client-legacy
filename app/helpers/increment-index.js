import Ember from 'ember';

export function incrementIndex(input) {
  return input + 1;
}

export default Ember.Handlebars.makeBoundHelper(incrementIndex);
