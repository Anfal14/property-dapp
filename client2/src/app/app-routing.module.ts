import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseWalletComponent } from './choose-wallet/choose-wallet.component';
import { HomeComponent } from './home/home.component';
import { ManagePropertyComponent } from './manage-property/manage-property.component';
import { AddPropertyComponent } from './add-property/add-property.component';


const routes: Routes = [
  {
    path: 'choose-wallet', component: ChooseWalletComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'manage-property', component: ManagePropertyComponent
  },
  {
    path: 'add-property' , component: AddPropertyComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
