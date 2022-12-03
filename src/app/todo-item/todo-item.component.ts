import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output()
  todoClicked: EventEmitter<void> = new EventEmitter();

  @Output()
  editClicked: EventEmitter<void> = new EventEmitter();

  @Output()
  deleteClicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onCheckBoxClick() {
   this.todoClicked.emit();
  }

  onEditClick() {
    this.editClicked.emit();
  }

  onDeleteClick() {
    this.deleteClicked.emit();
  }

}
