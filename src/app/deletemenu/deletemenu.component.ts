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
    this.s1.deleteservice(deleteform.value).subscribe(
      result => {
        if(result) {
          alert("Record Deleted Successfully!");
          deleteform.reset();
        }
  },error=>{
    if(error.error.error==="Not Found"){
      alert("Record Not Found");
    }
  });
  }
}
