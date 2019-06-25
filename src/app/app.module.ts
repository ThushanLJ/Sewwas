import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { FileSelectDirective } from 'ng2-file-upload';
import { ImagesPipe } from './pipes/images.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
import { NewBodyTopComponent } from './Components/new-body-top/new-body-top.component';
import { NewsComponent } from './Pages/news/news.component';
import { StoryComponent } from './Components/story/story.component';
import { VideoComponent } from './Components/video/video.component';
import { LoginComponent } from './Pages/login/login.component';
import { NewHeaderComponent } from './Components/new-header/new-header.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { CatagoryBlogComponent } from './Components/catagory-blog/catagory-blog.component';

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
    FooterComponent,
    NewBodyTopComponent,
    NewsComponent,
    StoryComponent,
    VideoComponent,
    LoginComponent,
    NewHeaderComponent,
    BlogComponent,
    CatagoryBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
