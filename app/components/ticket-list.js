import Ember from 'ember';
import storehelper from '../core/index/tickets/storehelper';

export default Ember.Component.extend({
  actions: {
    clickpage(page) {
      storehelper.ticketsasync(page);
    }
  }
});
