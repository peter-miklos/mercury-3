import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }                         from '@angular/http';
import { MaterialModule }                     from '@angular/material';
import 'hammerjs';

import { AppComponent }                   from './app.component';
import { DynamicFormComponent }           from './forms/dynamic-form.component';
import { DynamicFormQuestionComponent }   from './forms/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}
