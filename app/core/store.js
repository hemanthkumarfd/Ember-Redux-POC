import Redux from 'npm:redux';
import dashboardreducer from './index/dashboard/reducer';
import ticketsreducer from './index/tickets/reducer';
import thunkMiddleware from 'npm:redux-thunk';
import defaultstate from './defaultstate';

var {createStore,applyMiddleware} = Redux;

const reducerlist =[
  dashboardreducer,
  ticketsreducer,
];

const reducer = (state = defaultstate, action = {}) => {
  let finalstate = state;
  for(var i=0;i<reducerlist.length;i++) {
     finalstate = reducerlist[i](finalstate,action);
     if(finalstate !== state) {
       break;
     }
  }
  return finalstate;
};

let store = createStore(reducer,applyMiddleware(thunkMiddleware.default));

export default store;
