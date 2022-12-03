import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksListComponent } from './all-tasks-list/all-tasks-list.component';
import { DonesListComponent } from './dones-list/dones-list.component';
import { EditableTodoListComponent } from './editable-todo-list/editable-todo-list.component';
import { TodoAboutComponent } from './todo-about/todo-about.component';
import { TodosListComponent } from './todos-list/todos-list.component';

const routes: Routes = [
  // {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: '', component: AllTasksListComponent},
  {path: 'add', component: EditableTodoListComponent},
  {path: 'undones', component: TodosListComponent},
  {path: 'dones', component: DonesListComponent},
  {path: 'about', component: TodoAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
