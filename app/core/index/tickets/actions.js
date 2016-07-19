import Action from './keys';

class Actions {
  ticketsinit(data,page) {
    return {
      data,
      page,
      type: Action.TICKETS_INIT,
    };
  }

  inprogress(isprogress){
    return {
      isprogress,
      type: Action.IN_PROGRESS,
    };
  }

  incriment() {
    return {
      type: Action.INCRIMENT,
    };
  }
}

export default new Actions();
