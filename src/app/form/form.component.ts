import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('HENG');
  }
}
