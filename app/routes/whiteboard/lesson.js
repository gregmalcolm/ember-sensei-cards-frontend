import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.find("lesson", params['lesson-id']);
  }
});