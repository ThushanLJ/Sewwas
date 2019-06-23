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

const routes: Routes = [
  // {
  //   path:'' ,redirectTo:'/home',pathMatch:'full'
  // },
  { path:'' ,redirectTo:'/home',pathMatch:'full' },
  {path: 'home' , component: HomeComponent},
  {path: 'catagory/:type' , component: CatagoryComponent},
  {path: 'content/:type' , component: NewsComponent},
  {
    path:'news/:id',component:NewsComponent,
    children:[{path:'',component:StoryComponent}]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'video/:id',component:NewsComponent,
    children:[{path:'',component:VideoComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
