import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Todo } from '../models/todo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-editable-cards-list',
  templateUrl: './editable-cards-list.component.html',
  styleUrls: ['./editable-cards-list.component.scss']
})
export class EditableCardsListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private dataService: DataService,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  toggleDone(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }

}
