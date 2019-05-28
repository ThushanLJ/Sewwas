import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { ImagesPipe } from './pipes/images.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { BodyTopComponent } from './Components/body-top/body-top.component';
import { NewsService } from './Services/news.service';
import { CatagoryComponent } from './Pages/catagory/catagory.component';
import { CatagoryInfoComponent } from './Components/catagory-info/catagory-info.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
// import { ImagesPipe } from './pipes/images.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyTopComponent,
    CatagoryComponent,
    CatagoryInfoComponent,
    FileUploadComponent,
    FileSelectDirective,
    ImagesPipe
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
