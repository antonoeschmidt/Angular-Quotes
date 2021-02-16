import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanyeComponent } from './modules/kanye/kanye.component';
import { QuotesTableComponent } from './modules/quotes-table/quotes-table.component';

const routes: Routes = [
  { path: '', component: KanyeComponent},
  { path: 'quotes', component: QuotesTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
