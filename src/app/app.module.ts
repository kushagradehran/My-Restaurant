import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { HttpClientModule} from '@angular/common/http';
import { DeletemenuComponent } from './deletemenu/deletemenu.component';
import { UpdatemenuComponent } from './updatemenu/updatemenu.component';
import { InsertmenuComponent } from './insertmenu/insertmenu.component';
import { CommonModule } from '@angular/common';
import { ShowmenuComponent } from './showmenu/showmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedinComponent,
    DeletemenuComponent,
    UpdatemenuComponent,
    InsertmenuComponent,
    ShowmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
