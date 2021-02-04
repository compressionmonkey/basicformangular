import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-array-form-component',
  templateUrl: './array-form-component.component.html',
  styleUrls: ['./array-form-component.component.scss']
})
export class ArrayFormComponentComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    });
  }

  get phoneForms(){
    return this.myForm.get('phones') as FormArray;
  }

  addPhone(){
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });
    this.phoneForms.push(phone);
    console.log('this', this.phoneForms)
  }

  deletephone(i){
    console.log('this', this.phoneForms, i)
    this.phoneForms.removeAt(i);
  }
}
