import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  inserturl = "http://localhost:9009/insertdish"
  updateurl = "http://localhost:9009/updatedish"
  deleteurl = "http://localhost:9009/deletedish"
  viewurl = "http://localhost:9009/viewdish"

  constructor(private h1 : HttpClient) { }

  insertservice(data:any){
    return this.h1.post(this.inserturl,data);
  }

  updateservice(data:any){
    return this.h1.post(this.updateurl,data);
  }

  deleteservice(data:any){
    return this.h1.post(this.deleteurl,data);
  }

  viewservice(){
    return this.h1.get(this.viewurl);
  }
}
