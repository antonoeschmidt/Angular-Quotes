import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './modules/quotes/quotes.component';
import { QuotesTableComponent } from './modules/quotes-table/quotes-table.component';

const routes: Routes = [
  { path: '', component: QuotesComponent },
  { path: 'quotes', component: QuotesTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
