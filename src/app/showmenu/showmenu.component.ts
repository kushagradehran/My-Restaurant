import { Component , OnInit } from '@angular/core';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.css']
})
export class ShowmenuComponent implements OnInit {

  data: any=[];

  constructor(private s1 : DishService){}

  ngOnInit():void{
    this.s1.viewservice().subscribe(res=>{
      this.data = res;
    })
  }

}
