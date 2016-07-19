import Ember from 'ember';
import storehelper from '../core/index/dashboard/storehelper';

export default Ember.Route.extend({
  init(){
    storehelper.subscribe(()=>{
      this.refresh();
    });
  },

  model() {
    return storehelper.getState();
  }
});
