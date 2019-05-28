import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { KnowladgeComponent } from './Components/knowladge/knowladge.component';
import { EntertaintmentComponent } from './Components/entertaintment/entertaintment.component';
import { InformationComponent } from './Components/information/information.component';
import { HeaderComponent } from './Components/header/header.component';
import { CatagoryComponent } from './Pages/catagory/catagory.component';
import { CatagoryEntComponent } from './Components/catagory-ent/catagory-ent.component';
import { CatagoryKnwComponent } from './Components/catagory-knw/catagory-knw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KnowladgeComponent,
    EntertaintmentComponent,
    InformationComponent,
    HeaderComponent,
    CatagoryComponent,
    CatagoryEntComponent,
    CatagoryKnwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
