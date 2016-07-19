import Ember from 'ember';
import storehelper from '../core/index/tickets/storehelper';

export default Ember.Component.extend({
  actions:{
    incriment(){
      storehelper.incriment();
    }
  }
});
