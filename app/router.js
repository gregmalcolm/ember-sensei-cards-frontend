import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('iterations', function() {
    this.route('show', { path: '/:iteration-id' });
  });
  this.route('whiteboard', function() {
    this.route('story', { path: '/stories/:story-id' });
    this.route('lesson', { path: '/lessons/:lesson-id' });
  });
});

export default Router;
