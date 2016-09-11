import Ember from 'ember';

export default Ember.Component.extend({
  card: null,
  modelName: Ember.computed('card', function() {
    const modelName = this.get('card.constructor.modelName');
    return modelName ? modelName.toUpperCase() : "";
  }),
  actions: {
    exit() {
      this.sendAction('exit');
    }
  }
});
