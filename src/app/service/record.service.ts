import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }
  isuserloggedin:any;
  
  login(username:string,password:string)
    {

      this.isuserloggedin = (username == 'tsharma@gmail.com' &&  password == 'tsharma' );
      
      localStorage.setItem("isuserloggedin",this.isuserloggedin ? "true" : "false" );
      
      return (this.isuserloggedin);
    }
}
