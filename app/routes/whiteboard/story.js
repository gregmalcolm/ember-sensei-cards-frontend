import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.find("story", params['story-id']);
  }
});
