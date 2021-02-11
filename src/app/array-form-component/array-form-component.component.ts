import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { fromEvent, Observable, observable, of, pipe } from 'rxjs';
import { map, filter, catchError, retry } from 'rxjs/operators';
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
    // one example of an operator
    // let arr = []
    // const nums = of(1,2,3);
    // const squareValues = map((val: number) => val * val);
    // const squaredNums = squareValues(nums);
    // squaredNums.subscribe(x => {
    //   console.log("pop",x);
    //   arr.push(x)
    // });
    // console.log('arr', arr)
    
    // another example of operator using pipe

    const nums$ = of(1,2,3,4,5)
    .pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    
    // const squareOddVals = pipe(
    //   filter((n: number) => n % 2 !== 0),
    //   map(n => n * n)
    // );
    // const squareOdd = squareOddVals(nums);

    nums$.subscribe(val => {
      console.log('hey', val);
    })

    // ajax observable and error handling
    const apiData$ = ajax('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map((res: any) => {
        console.log('res', res.response);
        if(!res.response){
          throw new Error('Value Expected');
        }
        return res.response;
      }),
      retry(3),
      catchError(err => of([]))
      );
      apiData$.subscribe({
        // res => console.log('api is',res.status, res.response)
        next(x){console.log('data: ', x);},
        error(err){ console.log('errors already caught', err);}
      });
      // from event observable
      const el = document.getElementsByClassName('formPos');
      const mouseMoves$ = fromEvent(el, 'mousemove');
      const subscription = mouseMoves$.subscribe(
        (evt: MouseEvent) => {
          // console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
          if(evt.clientX < 410){
            subscription.unsubscribe();
          }
        }
        )
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
    console.log('this', this.phoneForms.controls)
  }

  deletephone(i){
    console.log('this', this.phoneForms, i)
    this.phoneForms.removeAt(i);
  }
}
