import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CatagoryInfoComponent } from './Components/catagory-info/catagory-info.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { CatagoryComponent } from './Pages/catagory/catagory.component';
import { NewsComponent } from './Pages/news/news.component';
import { StoryComponent } from './Components/story/story.component';
import { VideoComponent } from './Components/video/video.component';
import { LoginComponent } from './Pages/login/login.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { MoreNewsComponent } from './Components/more-news/more-news.component';
import { SearchComponent } from './Pages/search/search.component';
import { CatagorySearchComponent } from './Components/catagory-search/catagory-search.component';
import { SubCatagoryComponent } from './Pages/sub-catagory/sub-catagory.component';
import { BlogStoryComponent } from './Components/blog-story/blog-story.component'; 
import { UserComponent } from './Pages/user/user.component'; 
import { HistoryComponent } from './Components/history/history.component';
import { ViewProfileComponent } from './Components/view-profile/view-profile.component';
import { CatagoryDealsComponent } from './Components/catagory-deals/catagory-deals.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { NewPostComponent } from './Components/new-post/new-post.component';

const routes: Routes = [
  // {
  //   path:'' ,redirectTo:'/home',pathMatch:'full'
  // },
  { path:'' ,redirectTo:'/home',pathMatch:'full' },
  {path: 'home' , component: HomeComponent},
  {path: 'catagory/:type' , component: CatagoryComponent},
  {path: 'content/:type' , component: NewsComponent},
  {path: 'morenews' , component: MoreNewsComponent},

  {
    path:'news/:id',component:NewsComponent,
    children:[{path:'',component:StoryComponent}]
  },
  {
    path:'blogStory/:id',component:BlogComponent,
    children:[{path:'',component:BlogStoryComponent}]
  },
  {
    path:'login',
    component: SignUpComponent
  },
  {
    path:'video/:id',component:NewsComponent,
    children:[{path:'',component:VideoComponent}]
  },
  { path: 'sub-catagory/:type' , component: SubCatagoryComponent,
    children:[{path:'',component:MoreNewsComponent}]
  },
  { path: 'search/:text' , component: SearchComponent,
    children:[{path:'',component:CatagorySearchComponent}]
  },
  { path: 'userhistory' , component: UserComponent,
    children:[{path:'',component:HistoryComponent}]
  },
  { path: 'userprofile' , component: UserComponent,
    children:[{path:'',component:ViewProfileComponent}]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
