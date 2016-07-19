import Action from './keys';
import defaultstate from '../../defaultstate';

export default (state = defaultstate, action = {})=>{
  switch(action.type)
  {
    case Action.TICKETS_INIT:
      return Object.assign({},state,{
        tickets:{
          data:action.data,
          page:action.page,
          count: state.tickets.count,
        }
      });
    case Action.IN_PROGRESS:
    {
      const tickets = Object.assign({},state.tickets,{
          isprogress:action.isprogress,
      });
      return Object.assign({},state,{tickets});
    }

    case Action.INCRIMENT:
    {
    //  const arr=[].concat(state.tickets.data);
/*    const arr=[];

    console.log(state.tickets.data[0])
        arr.push(state.tickets.data[0]);
     arr.push({name:'prem'});
      arr.push( {name:"dsjdjhdfjsf"});
      //arr[1]= { name: arr[2].name };
      arr.push({name:2});
        arr.push(state.tickets.data[1]);
*/
      const tickets = Object.assign({},state.tickets,{
         count: (state.tickets.count+1),
         
      });
      console.log(state.tickets);
      return Object.assign({},state,{tickets});
    }
    default:
      return state;
  }
};
