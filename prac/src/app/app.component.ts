import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators} from "@angular/forms"
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form;

 constructor(private newService: DataService){
   this.newService.obj.name="rahim";
   console.log(this.newService.success());
   this.newService.fetchData();
 }

 ngOnInit(){
   this.form=new FormGroup({
     firstname : new FormControl('', Validators.compose([
       Validators.required,
       Validators.minLength(3),
       Validators.pattern('[\\w\\-\\s\\/]+')
     ])),
     lastname : new FormControl('', this.textValidator),
     language : new FormControl('')
   });


 }

 // coustom validator
 textValidator(control){
   if(control.value.length < 3){
     return {lastname: true};
   }
 }

 onSubmit(value){
   console.log(value);
 }
}
