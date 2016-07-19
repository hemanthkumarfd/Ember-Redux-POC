import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' },function() {
    this.route('dashboard');
    this.route('tickets', function() {
      this.route('incriment');
    });
  });
});

export default Router;
