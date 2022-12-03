import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})

export class TodosListComponent implements OnInit {

  title: string = 'The Black Undones List'

  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
