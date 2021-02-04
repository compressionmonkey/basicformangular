import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormComponentComponent } from './basic-form-component/basic-form-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedFormComponentComponent } from './nested-form-component/nested-form-component.component';
import { ArrayFormComponentComponent } from './array-form-component/array-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponentComponent,
    NestedFormComponentComponent,
    ArrayFormComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
