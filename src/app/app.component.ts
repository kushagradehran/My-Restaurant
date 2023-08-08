import { Component, HostListener, OnInit } from '@angular/core';
import { RecordService } from './service/record.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private r1:RecordService){}
  subscription:Subscription= new Subscription();
  showLogin=true;
  showLogout=false;
  ngOnInit() {
    this.subscription.add(this.r1.subExecuteAction.subscribe(res=>{
      if(res.action==='Login'){
        this.showLogin=false;
        this.showLogout=true;
      }
    }));
  }
  title = 'My-Resturant';
}
