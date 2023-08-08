import { Component, OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insertmenu',
  templateUrl: './insertmenu.component.html',
  styleUrls: ['./insertmenu.component.css']
})
export class InsertmenuComponent {

  constructor(private s1:DishService, private router:Router){}
  ngOnit():void{}

  insertdish(insertform:NgForm){
     this.s1.insertservice(insertform.value).subscribe(res=>{
      if(Object.keys(res).length>0){
        alert('Data Saved Successfully')
        insertform.reset();
      }
    });
  }
  onClick(form:any){
    console.log(form)
  }
}
