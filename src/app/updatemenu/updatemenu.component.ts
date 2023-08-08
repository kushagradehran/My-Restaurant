import { Component, OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrls: ['./updatemenu.component.css']
})
export class UpdatemenuComponent {

  constructor(private s1:DishService){}

  ngOnit():void{}

  updatedish(updateform:{value:any;}){
    return this.s1.updateservice(updateform.value).subscribe();
  }

}
