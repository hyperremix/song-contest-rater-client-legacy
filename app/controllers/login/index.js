import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties('identification', 'password');
      if (!Ember.isEmpty(data.identification) && !Ember.isEmpty(data.password)) {
        Ember.$.ajax({
          url: 'http://localhost:3000/login',
          type: 'GET',
          headers: {
            authorization: internals.header(data.identification, data.password)
          },
          dataType: 'jsonp',
          success: function (response) {
            console.log(response);
            var rater = (response.rater || {});
            Ember.Application.Session.setProperties({
              raterId: rater._id
            });
            self.transitionTo('artists');
          }
        });
      }
    }
  }
});

var internals = {};

internals.header = function (username, password) {
  return 'Basic ' + btoa(username + ':' + password);
};
