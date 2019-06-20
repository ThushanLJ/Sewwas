import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { FileSelectDirective } from 'ng2-file-upload';
import { ImagesPipe } from './pipes/images.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { BodyTopComponent } from './Components/body-top/body-top.component';
import { NewsService } from './Services/news.service';
import { CatagoryComponent } from './Pages/catagory/catagory.component';
import { CatagoryInfoComponent } from './Components/catagory-info/catagory-info.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
// import { ImagesPipe } from './pipes/images.pipe';
import { KnowladgeComponent } from './Components/knowladge/knowladge.component';
import { EntertaintmentComponent } from './Components/entertaintment/entertaintment.component';
import { InformationComponent } from './Components/information/information.component';
import { HeaderComponent } from './Components/header/header.component';
import { CatagoryEntComponent } from './Components/catagory-ent/catagory-ent.component';
import { CatagoryKnwComponent } from './Components/catagory-knw/catagory-knw.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyTopComponent,
    CatagoryInfoComponent,
    FileUploadComponent,
    ImagesPipe,
    KnowladgeComponent,
    EntertaintmentComponent,
    InformationComponent,
    HeaderComponent,
    CatagoryComponent,
    CatagoryEntComponent,
    CatagoryKnwComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
