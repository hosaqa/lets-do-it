import { observable, computed, autorun, reaction, get, action } from 'mobx';

class mainStore {
  @observable todos = [];

  constructor() {}
}

export default new mainStore();
