import { Component, OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-insertmenu',
  templateUrl: './insertmenu.component.html',
  styleUrls: ['./insertmenu.component.css']
})
export class InsertmenuComponent {

  constructor(private s1:DishService){}

  ngOnit():void{}

  insertdish(insertform:{value:any;}){
    return this.s1.insertservice(insertform.value).subscribe();
  }

}
