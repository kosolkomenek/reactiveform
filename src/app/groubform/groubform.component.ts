import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-groubform',
  templateUrl: './groubform.component.html',
  styleUrls: ['./groubform.component.css']
})
export class GroubformComponent implements OnInit {
    
  profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4)]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });


  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.profileForm.controls['firstName'].value)
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Heng',
      address: {
        street: 'rodjanaroad'
      }
    });
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
