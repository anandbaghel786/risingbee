import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myform: FormGroup;
  hobbies: FormArray;

  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      name: new FormControl('', Validators.required),
      hobbies: this.fb.array([this.createItem()])
    })
  }

  get f() { return this.myform.controls; }

  createItem(): FormGroup {
    return this.fb.group({
      id: 0,
      name: ''
    })
  }


  ngOnInit() {
  }

  getNewItem(): void {
    this.hobbies = this.myform.get('hobbies') as FormArray;
    this.hobbies.push(this.createItem());
  }

  removeItem() {
    console.log(this.myform.value);

    (<FormArray>this.myform.controls.hobbies).controls.splice((<FormArray>this.myform.controls.hobbies).controls.length - 1, 1)
  }

}
