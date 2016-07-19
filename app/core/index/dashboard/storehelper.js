//import actions from './actions';
import asyncactions from './async';
import store from '../../store';

class StoreHelper {
  subscribe(handler) {
    store.subscribe(handler);
  }

  getState(){
    return store.getState();
  }

  dashboardinit (resolve) {
    store.dispatch(asyncactions.dashboardasync(resolve));
  }
}

export default new StoreHelper();
