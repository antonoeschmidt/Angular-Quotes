import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './modules/quotes/quotes.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  { path: '', component: QuotesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
