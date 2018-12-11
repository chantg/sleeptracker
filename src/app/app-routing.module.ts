import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'overnight-page', loadChildren: './data/overnight-page/overnight-page.module#OvernightPagePageModule' },
  { path: 'view', loadChildren: './data/view/view.module#ViewPageModule' },
  { path: 'sleepy', loadChildren: './data/sleepy/sleepy.module#SleepyPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
