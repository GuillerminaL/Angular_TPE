import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditableUndonesListComponent } from './pages/undones-list/undones-list.component';
import { AboutComponent } from './pages/about/about.component';
import { EditableDonesListComponent } from './pages/dones-list/dones-list.component';
import { EditableTodoListComponent } from './pages/editable-todo-list/editable-todo-list.component';

import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditableCardsListComponent } from './components/editable-cards-list/editable-cards-list.component';
import { EditableUndoneCardsListComponent } from "./components/editable-cards-list/editable-filtered-list/editable-undone-cards-list.component";
import { EditableDoneCardsListComponent } from "./components/editable-cards-list/editable-filtered-list/editable-done-cards-list.component";

@NgModule({
  declarations: [
    AppComponent,
    EditableUndonesListComponent,
    TodoItemComponent,
    EditDialogComponent,
    AboutComponent,
    EditableDonesListComponent,
    AddFormComponent,
    EditableCardsListComponent,
    EditableTodoListComponent,
    EditableUndoneCardsListComponent,
    EditableDoneCardsListComponent,
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
