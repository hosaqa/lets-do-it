import { observable, autorun, action } from 'mobx';
import { fetchHabits } from '../services/api';

class HabitsStore {
  @observable habitsList = null;

  @action
  setHabbits(habbitsList) {
    this.habitsList = habbitsList;
    console.log(this.habitsList);
  }

  @action.bound
  getHabits() {
    fetchHabits()
      .then(habitsData => {
        this.setHabbits(habitsData);
      })
      .catch(error => error);
  }
}

export default HabitsStore;
