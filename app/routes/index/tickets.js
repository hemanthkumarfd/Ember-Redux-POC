import Ember from 'ember';
import storehelper from '../../core/index/tickets/storehelper';
import getParameterByName from '../../utils/common';

export default Ember.Route.extend({
  queryParams: {page:''},
  init() {
    storehelper.ticketsasync(getParameterByName('page'));
  },
  model(){
    return this.modelFor('index').tickets;
  },
  pageDidChange(param){
   alert('changed')
  }
});
