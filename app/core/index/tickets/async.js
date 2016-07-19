import actions from './actions';

let tickets1=[
  {name:'ticket1'},
  {name:'ticket2'},
  {name:'ticket3'},
  {name:'ticket4'},
  {name:'ticket5'},
];

let tickets2=[
  {name:'ticket6'},
  {name:'ticket7'},
  {name:'ticket8'},
  {name:'ticket9'},
  {name:'ticket10'},
];

class AsyncAcions {
  ticketsasync(page,resolve) {
    return (dispatch)=>{
      //dispatch(actions.inprogress(true));
      setTimeout(()=>{
        dispatch(actions.inprogress(true));
      });
      setTimeout(()=>{
        let tickets=null;
        if(page==='1') {
          tickets = tickets1;
        } else if(page==='2') {
          tickets = tickets2;
        } else {
          tickets = [];
        }
        dispatch(actions.inprogress(false));
        dispatch(actions.ticketsinit(tickets,page));
        if(resolve) {
          resolve();
        }
      },5000);
    };
  }
}

export default new AsyncAcions();
