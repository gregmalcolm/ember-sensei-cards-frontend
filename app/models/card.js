import DS from 'ember-data';

export default DS.Model.extend({
  iteration: DS.attr('number'),
  title: DS.attr('string'),
  storePoints: DS.attr('number'),
  task: DS.attr('string'),
  guidance: DS.attr('string'),
  acceptanceCriteria: DS.attr('string')
});
