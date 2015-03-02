import Ember from 'ember';

export function initialize() {
  Ember.Application.Session = Ember.Object.extend({
    init: function() {
      this._super();
      this.set('raterId', Ember.$.cookie('auth_rater'));
    },
    authAccountIdChanged: function() {
      var raterId = this.get('raterId');
      Ember.$.cookie('auth_rater', raterId);
    }.observes('raterId')
  }).create();
}

export default {
  name: 'session',
  initialize: initialize
};
