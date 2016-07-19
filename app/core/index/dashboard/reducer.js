import Action from './keys';
import defaultstate from '../../defaultstate';

export default (state = defaultstate, action = {})=>{
  switch(action.type)
  {
    case Action.DASHBOARD_INIT:
      return Object.assign({},state,{
        dashboard:{
          data:action.data,
        }
      });

    default:
      return state;
  }
};
