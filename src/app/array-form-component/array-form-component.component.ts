import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { fromEvent, observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-array-form-component',
  templateUrl: './array-form-component.component.html',
  styleUrls: ['./array-form-component.component.scss']
})
export class ArrayFormComponentComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    const nums = of(1,2,3);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);

    squaredNums.subscribe(x => console.log("poooo",x));

    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    });
    // ajax observable
    const apiData = ajax('https://jsonplaceholder.typicode.com/todos/1');
    apiData.subscribe(
      res => console.log('api is',res.status, res.response)
    )
    // from event observable
    const el = document.getElementsByClassName('formPos');
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe(
      (evt: MouseEvent) => {
        console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
        if(evt.clientX < 410){
          subscription.unsubscribe();
        }
      }
    )
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
