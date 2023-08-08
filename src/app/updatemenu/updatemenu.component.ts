import { Component, OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent {

  constructor(private s1:DishService){}

  ngOnit():void{}

  updatedish(updateform:NgForm){
    this.s1.updateservice(updateform.value).subscribe(res=>{
      if(Object.keys(res).length>0){
        alert('Data Updated Successfully');
        updateform.reset();
      }
    });
  }

}
