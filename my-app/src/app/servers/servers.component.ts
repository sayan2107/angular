import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServers=false;
  serverStatus="no server created";
  serverName='';

  constructor() { 
    setTimeout(()=>{
  this.allowServers=true;
    },2000);
  }

  getServerStatus(){
    this.serverStatus="server was created";
  }

  sendData(data: Event){
  this.serverName=(<HTMLInputElement>data.target).value;
  }


  ngOnInit() {
  }

  

}
