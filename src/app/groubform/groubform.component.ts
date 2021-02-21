import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-groubform',
  templateUrl: './groubform.component.html',
  styleUrls: ['./groubform.component.css']
})
export class GroubformComponent implements OnInit {
  public data ={ "name": "kosol", "lastname":"komenek"};//test
  configUrl = 'http://localhost:4201/test';
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

  constructor(private fb: FormBuilder, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http
    .post(this.configUrl,this.data).subscribe(); 
  }
  onSubmit() {
    this.data.name = this.profileForm.controls['firstName'].value
    this.data.lastname = this.profileForm.controls['lastName'].value
    console.log(this.data);
    this.http
    .post(this.configUrl,this.data).subscribe();;
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
