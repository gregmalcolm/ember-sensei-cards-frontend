import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    exit() {
      this.transitionToRoute('whiteboard');
    }
  }
});
