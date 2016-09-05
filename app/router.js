import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('iterations', function() {
    this.route('show', {path: '/:iteration-id'});
    this.route('whiteboard', {path: '/:iteration-id/whiteboard'}, function() {
      this.route('cards', function() {
        this.route('show', {path: '/:card-id'});
      });
    });
  });
});

export default Router;
