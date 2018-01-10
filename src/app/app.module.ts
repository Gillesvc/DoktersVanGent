import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ArtsenComponent } from './artsen/artsen.component';
import { ArtsDetailComponent } from './arts-detail/arts-detail.component';
import { ArtsService } from './arts.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ArtsenComponent,
    ArtsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ArtsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
