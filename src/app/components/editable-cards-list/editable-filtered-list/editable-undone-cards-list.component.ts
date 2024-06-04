import { Component, OnInit } from '@angular/core';
import {EditableCardsListComponent} from "../editable-cards-list.component";

@Component({
  selector: 'app-editable-undone-cards-list',
  templateUrl: '../editable-cards-list.component.html',
  styleUrls: ['../editable-cards-list.component.scss']
})

export class EditableUndoneCardsListComponent extends EditableCardsListComponent implements OnInit {

  override ngOnInit(): void {
    this.todos = this.dataService.getAllTodos().filter(todo => !todo.completed);
  }

}
