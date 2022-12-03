import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})

export class EditDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public todo: Todo ) {}

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid) return
    const updatedTodo = {
      ...this.todo, ...form.value
    }
    this.dialogRef.close(updatedTodo);
  }


}
