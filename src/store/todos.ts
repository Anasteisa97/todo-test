import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {getTodos} from "../api/getTodos";

class Todos {
  todos = [];

  constructor() {
    makeAutoObservable(this, {todos:observable, fetchTodos:action})
  }

  fetchTodos = async (page) => {
    const data = await getTodos(page);
    runInAction(() => {
      this.todos = [...this.todos, ...data]
    })
  }
}

export default new Todos()