import { Component , OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent {

  data:any;

  constructor(private s1 : DishService){}

  ngOnInit():void{
    let response = this.s1.viewservice();
    response.subscribe((data1)=>this.data=data1);
  }

}
