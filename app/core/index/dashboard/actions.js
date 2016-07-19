import Action from './keys';

class Actions {
  dashboardinit(data) {
    return {
      data,
      type: Action.DASHBOARD_INIT,
    };
  }
}

export default new Actions();
