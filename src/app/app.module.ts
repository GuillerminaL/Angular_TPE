import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { TodoAboutComponent } from './todo-about/todo-about.component';
import { DonesListComponent } from './dones-list/dones-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditableCardsListComponent } from './editable-cards-list/editable-cards-list.component';
import { EditableTodoListComponent } from './editable-todo-list/editable-todo-list.component';
import { AllTasksListComponent } from './all-tasks-list/all-tasks-list.component';

import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoItemComponent,
    EditDialogComponent,
    TodoAboutComponent,
    DonesListComponent,
    AddFormComponent,
    EditableCardsListComponent,
    EditableTodoListComponent,
    AllTasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
