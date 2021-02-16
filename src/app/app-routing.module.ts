import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { KanyeComponent } from './modules/kanye/kanye.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'kanye', component: KanyeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
