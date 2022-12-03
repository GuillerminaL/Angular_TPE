import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    if(form.valid) {
      this.dataService.addTodo(form.value.text);
      form.reset();
    }
  }

}
