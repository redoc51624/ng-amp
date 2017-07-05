import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBneulYJ5bqLBrIVdkRGzf9uaCgzXhLl28",
    authDomain: "ng-amp.firebaseapp.com",
    databaseURL: "https://ng-amp.firebaseio.com",
    projectId: "ng-amp",
    storageBucket: "ng-amp.appspot.com",
    messagingSenderId: "142079577760"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

