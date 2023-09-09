import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {getTodos} from "../api/getTodos";
import {TodoType} from "../types.ts";

class Todos {
  todos: TodoType[] = [];
  currentPage: number = 1

  constructor() {
    makeAutoObservable(this, {todos:observable, fetchTodos:action})
  }

  fetchTodos = async (): Promise<void> => {
    const data = await getTodos(this.currentPage);
    runInAction((): void => {
      this.todos = [...this.todos, ...data];
      this.currentPage += 1;
    })
  }
}

export default new Todos()