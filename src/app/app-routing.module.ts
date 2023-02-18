import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ForgepasswordComponent } from './forgepassword/forgepassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PepolelistComponent } from './pepolelist/pepolelist.component';
import { RegisterComponent } from './register/register.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"pepolelist",component:PepolelistComponent},
  {path:"forgepassword",component:ForgepasswordComponent},
  {path:"",component:HomeComponent},
  {path:"add",component:AddComponent},
  {path:"updateuser/:id",component:UpdateuserComponent},
  {path:"confirmation-dialog",component:ConfirmationDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
