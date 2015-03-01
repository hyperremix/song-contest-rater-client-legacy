import Ember from 'ember';

export function ratingSummer(input) {
  return input.song + input.singing + input.show + input.looks + input.clothes;
}

export default Ember.Handlebars.makeBoundHelper(ratingSummer);
