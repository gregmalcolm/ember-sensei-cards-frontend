import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    done() {
      alert("done");
    }
  }
});
