import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.ObjectController.extend({
  actions: {
    rate: function() {
      Ember.$.ajax({
        type: 'POST',
        url: ENV.apiUrl + '/ratings',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify({
          rating: {
            artist: this.get('id'),
            rater: this.get('session.rater_id'),
            song: this.get('song'),
            singing: this.get('singing'),
            show: this.get('show'),
            clothes: this.get('clothes'),
            looks: this.get('looks')
          }
        })
      }).always(function() {
        window.location.reload(true);
      });
    }
  }
});
