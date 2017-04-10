import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  } from "module";
import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';

export const fireBaseConfig = {
    apiKey: "AIzaSyDP5HKphu0W2JOCGgABa1K2BOi8LmEISGU",
    authDomain: "pepper-6d2d2.firebaseapp.com",
    databaseURL: "https://pepper-6d2d2.firebaseio.com",
    projectId: "pepper-6d2d2",
    storageBucket: "pepper-6d2d2.appspot.com",
    messagingSenderId: "123813649818"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
