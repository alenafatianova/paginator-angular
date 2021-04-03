import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './paginationcomponent/paginationcomponent.component';
import { PaginatorDirective } from './paginationcomponent/directives/pagination.directives'

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    PaginatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
