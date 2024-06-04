import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditableTodoListComponent } from './pages/editable-todo-list/editable-todo-list.component';
import { EditableDonesListComponent } from './pages/dones-list/dones-list.component';
import { EditableUndonesListComponent } from './pages/undones-list/undones-list.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  // {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: '', component: EditableTodoListComponent},
  {path: 'dones', component: EditableDonesListComponent},
  {path: 'undones', component: EditableUndonesListComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
