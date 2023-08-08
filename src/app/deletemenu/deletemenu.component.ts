import { Component , OnInit} from '@angular/core';
import { DishService } from '../service/dish.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.css']
})
export class DeletemenuComponent {

  constructor(private s1:DishService){}

  ngOnit():void{}

  deletedish(deleteform:NgForm){
    this.s1.deleteservice(deleteform.value).subscribe(res=>{
      if(res==='not found'){
        alert("Record Not Found!");
        deleteform.reset();
      }
      else{
        alert("Delete Successfully!");
        deleteform.reset();
      }
    },error=>{
      if(error.error.text==="not found"){
        alert("Record Not Found!");
        deleteform.reset();
      }
      else{
        alert("Delete Successfully!");
        deleteform.reset();
      }
    });
  }

}
