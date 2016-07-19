import actions from './actions';
import asyncactions from './async';
import store from '../../store';

class StoreHelper {
  subscribe(handler) {
    store.subscribe(handler);
  }

  getState(){
    return store.getState();
  }

  ticketsasync(page,resolve) {
    store.dispatch(asyncactions.ticketsasync(page,resolve));
  }

  incriment(){
    store.dispatch(actions.incriment());
  }
}

export default new StoreHelper();
