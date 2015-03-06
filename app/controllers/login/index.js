import Ember from 'ember';
import ENV from '../../config/environment';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:token',
  actions: {
    register: function() {
      var name = this.get('regName')
      var pass = this.get('regPass');
      var passConfirm = this.get('regPassConfirm');

      if (passConfirm === pass) {
        Ember.$.ajax({
          type: 'POST',
          url: ENV.apiUrl + '/register',
          contentType: "application/json; charset=utf-8",
          dataType: 'json',
          data: JSON.stringify({
            rater: {
              name: name,
              password: pass
            }
          })
        });
      }
    }
  }
});
