import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { KanyeComponent } from './modules/kanye/kanye.component';
import { HeaderComponent } from './core/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { QuotesTableComponent } from './modules/quotes-table/quotes-table.component';

@NgModule({
  declarations: [
    AppComponent,
    KanyeComponent,
    HeaderComponent,
    QuotesTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
