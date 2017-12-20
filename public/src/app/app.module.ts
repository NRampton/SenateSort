import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SenatorService } from './senator.service';
import { SenateResolverService } from './senate-resolver.service';
import { SortPipe } from './sortpipe';
import { SenateSortComponent } from './senate-sort/senate-sort.component';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    SenateSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SenatorService,
    SenateResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
