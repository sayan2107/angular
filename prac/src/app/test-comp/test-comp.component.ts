import { Component, OnInit } from '@angular/core';
import {DataService} from "./../data.service";
@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor(private Service: DataService) {
    console.log(this.Service.obj)
  }

  ngOnInit() {
  }

}
