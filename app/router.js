import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('artists', function(){
    this.route('view', { path: "/:_id" });
  });
  this.resource('raters', function(){
    this.route('view', { path: "/:_id" });
  });
  this.resource('help', function(){});
});

export default Router;
