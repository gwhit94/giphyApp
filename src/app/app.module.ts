import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { resultsReducer } from './results.reducer';
import { MyResultComponent } from './my-result/my-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MyResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    StoreModule.forRoot({result: resultsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
