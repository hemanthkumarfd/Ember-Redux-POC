import Ember from 'ember';
import storehelper from '../../core/index/dashboard/storehelper';

export default Ember.Route.extend({
  init(){
    storehelper.dashboardinit();
  },
  model(){
    return this.modelFor('index').dashboard;
  }
});
