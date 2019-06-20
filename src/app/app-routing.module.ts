import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CatagoryInfoComponent } from './Components/catagory-info/catagory-info.component';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { CatagoryComponent } from './Pages/catagory/catagory.component';

const routes: Routes = [
  // {
  //   path:'' ,redirectTo:'/home',pathMatch:'full'
  // },
  { path:'' ,redirectTo:'/home',pathMatch:'full' },
  {path: 'home' , component: HomeComponent},
  {path: 'catagory/:type' , component: CatagoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
