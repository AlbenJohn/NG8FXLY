import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {DemoMaterialModule} from "../../app/material-module"
import { FlexLayoutModule } from '@angular/flex-layout';
 import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import {DynmpageComponent} from '../dynmpage/dynmpage.component'

@NgModule({
  declarations: [LoginComponent,SidenavbarComponent,DynmpageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,FlexLayoutModule,
   DemoMaterialModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
