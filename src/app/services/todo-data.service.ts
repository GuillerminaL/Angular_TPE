import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

const URL = 'https://61bb9f4de943920017784f53.mockapi.io/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(URL);
  }

  public addTodo(text: string): void {
    let newTodo = {
        text: text,
        completed: false,
    };
    this.http.post(URL, newTodo);
  }

  public updateTodo(updateTodo: Todo): void {
    this.http.put(URL, updateTodo);
  }

  


}
