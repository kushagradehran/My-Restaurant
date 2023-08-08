import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecordService } from '../service/record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  formdata!: FormGroup;
  constructor(private r1:RecordService, private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl('kush@gmail.com'),
      password: new FormControl('kush12345')
    });
  }
   onclicksubmit(data: any) {
    this.username = data.username;
    this.password = data.password;
    let response = this.r1.login(this.username, this.password);
    if (response == true) {
      console.warn('you are here')
     this.router.navigate(['/loggedin']);
    }
    else {
      this.router.navigate(['/notloggedin']);
     }
  }
}