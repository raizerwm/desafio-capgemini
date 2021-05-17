import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddUsercontactComponent } from './add-usercontact/add-usercontact.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUsercontactComponent } from './edit-usercontact/edit-usercontact.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { EditAnuncioComponent } from './edit-anuncio/edit-anuncio.component';
import { AddAnuncioComponent } from './add-anuncio/add-anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsercontactComponent,
    UsercontactComponent,
    AnuncioComponent,
    AddAnuncioComponent,
    EditAnuncioComponent,
    DashboardComponent,
    EditUsercontactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
