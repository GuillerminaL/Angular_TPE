import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dones-list',
  templateUrl: './dones-list.component.html',
  styleUrls: ['./dones-list.component.scss']
})

export class DonesListComponent implements OnInit {

  title: string = 'The Black Dones List'
  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

}
