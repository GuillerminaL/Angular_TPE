import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  idCont: number = 7;

  todos: Todo[] = [
    {
      text: "Be grateful",
      completed: false,
    },
    {
      text: "Go outside",
      completed: false,
    },
    {
      text: "💓 Love",
      completed: true,
    },
    {
      text: "Have time to myself",
      completed: false,
    },
    {
      text: "Meditate",
      completed: true,
    },
    {
      text: "Spend time with loved ones",
      completed: true,
    },
    {
      text: "Spend time with loved ones",
      completed: true,
    }
  ];

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addTodo(text: string): void {
    let newTodo = {
        text: text,
        completed: false,
    };
    this.todos.unshift(newTodo);
  }

  updateTodo(index: number, updateTodo: Todo ): void {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}



