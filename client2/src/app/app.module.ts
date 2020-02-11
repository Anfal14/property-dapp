import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { ChooseWalletComponent } from './choose-wallet/choose-wallet.component';
import { HomeComponent } from './home/home.component';
import { ManagePropertyComponent } from './manage-property/manage-property.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HttpClientModule } from '@angular/common/http';
import { Contract } from './contract';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    ChooseWalletComponent,
    HomeComponent,
    ManagePropertyComponent,
    AddPropertyComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [Contract],
  bootstrap: [AppComponent]
})
export class AppModule { }
