import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { FileSelectDirective } from 'ng2-file-upload';
import { ImagesPipe } from './pipes/images.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

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
import { HomeDealsComponent } from './Components/home-deals/home-deals.component';
import { FirstHeaderComponent } from './Components/first-header/first-header.component';
import { SecondHeaderComponent } from './Components/second-header/second-header.component';
import { First2HeaderComponent } from './Components/first2-header/first2-header.component';
import { SubCatagoryComponent } from './Pages/sub-catagory/sub-catagory.component';
import { MoreNewsComponent } from './Components/more-news/more-news.component';
import {ReadListComponent} from './Components/read-list/read-list.component';
import { NewPostComponent } from './Components/new-post/new-post.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { PostAllComponent } from './Components/post-all/post-all.component';
import { CatagorySearchComponent } from './Components/catagory-search/catagory-search.component';
import { SearchComponent } from './Pages/search/search.component';
import { ViewProfileComponent } from './Components/view-profile/view-profile.component';
import { HistoryComponent } from './Components/history/history.component';
import { PinsComponent } from './Components/pins/pins.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BlogStoryComponent } from './Components/blog-story/blog-story.component';
import { UserComponent } from './Pages/user/user.component';
import { CatagoryDealsComponent } from './Components/catagory-deals/catagory-deals.component';




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
    CatagoryBlogComponent,
    HomeDealsComponent,
    FirstHeaderComponent,
    SecondHeaderComponent,
    First2HeaderComponent,
    SubCatagoryComponent,
    MoreNewsComponent,
    ReadListComponent,
    NewPostComponent,
    CommentsComponent,
    PostAllComponent,
    CatagorySearchComponent,
    SearchComponent,
    ViewProfileComponent,
    HistoryComponent,
    PinsComponent,
    SignUpComponent,
    BlogStoryComponent,
    UserComponent,
    CatagoryDealsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CKEditorModule,
    NgxPaginationModule,
    JwSocialButtonsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
