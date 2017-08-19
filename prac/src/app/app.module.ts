import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {DataService} from "./data.service";
import { TestCompComponent } from './test-comp/test-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
