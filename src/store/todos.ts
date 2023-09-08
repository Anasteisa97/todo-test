import {makeAutoObservable} from "mobx";
import {getTodos} from "../api/getTodos";

class Todos {
  todos = [];

  constructor() {
    makeAutoObservable(this)
  }

  fetchTodos(page) {
    getTodos(page)
      .then(data => {
        //this.todos = [...this.todos, ...data]
        if (!this.todos.length) {
          this.todos = [...data]
        }
      });
  }
}

export default new Todos()