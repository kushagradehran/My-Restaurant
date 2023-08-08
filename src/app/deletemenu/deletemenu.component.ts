import { Component , OnInit} from '@angular/core';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.css']
})
export class DeletemenuComponent {

  constructor(private s1:DishService){}

  ngOnit():void{}

  deletedish(deleteform:{value:any;}){
    return this.s1.deleteservice(deleteform.value).subscribe();
  }

}
