import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  idCont: number = 7;

  todos: Todo[] = [
    {
      text: "Levantar un pie",
      completed: false,
    },
    {
      text: "Elevar el muslo",
      completed: false,
    },
    {
      text: "Pisar el escalón",
      completed: true,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus inventore accusantium eos enim laudantium, praesentium animi autem explicabo a, deserunt quo aliquam commodi voluptatum vel, vero nulla id sapiente!",
      completed: false,
    },
    {
      text: "Extender la rodilla",
      completed: true,
    },
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
    this.todos.push(newTodo);
  }

  updateTodo(index: number, updateTodo: Todo ): void {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}



