import actions from './actions';

class AsyncAcions {
  dashboardasync(resolve) {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(actions.dashboardinit('this is dashboard data from api'));
            if(resolve) {
              resolve();
            }
        },5000);
    };
  }
}

export default new AsyncAcions();
