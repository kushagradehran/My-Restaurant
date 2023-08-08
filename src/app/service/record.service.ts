import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }
  isuserloggedin:any;
  subExecuteAction= new Subject<{action:string}>()
  login(username:string,password:string)
    {

      this.isuserloggedin = (username == 'kush@gmail.com' &&  password == 'kush12345' );
      
      localStorage.setItem("isuserloggedin",this.isuserloggedin ? "true" : "false" );
      
      return (this.isuserloggedin);
    }
  invokeExecuteAction(param:{action:string}){
this.subExecuteAction.next(param);
  }
}
