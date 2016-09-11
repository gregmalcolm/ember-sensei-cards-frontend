import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      stories: this.store.findAll("story"),
      lessons: this.store.findAll("lesson")
    });
  }
});
