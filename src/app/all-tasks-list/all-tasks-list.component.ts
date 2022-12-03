import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-all-tasks-list',
  templateUrl: './all-tasks-list.component.html',
  styleUrls: ['./all-tasks-list.component.scss']
})
export class AllTasksListComponent implements OnInit {

  title: string = 'The Black List'
  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
