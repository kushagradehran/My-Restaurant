import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';
import { InsertmenuComponent } from './insertmenu/insertmenu.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { DeletemenuComponent } from './deletemenu/deletemenu.component';
import { NotloggedinComponent } from './notloggedin/notloggedin.component';

const routes: Routes = [
  {path:'showmenu',component:ShowmenuComponent},
  {path:'insertmenu',component:InsertmenuComponent},
  {path:'updatemenu',component:UpdatemenuComponent},
  {path:'deletemenu',component:DeletemenuComponent},
  {path:'login',component:LoginComponent},
  {path:'loggedin',component:LoggedinComponent},
  {path:'notloggedin',component:NotloggedinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
