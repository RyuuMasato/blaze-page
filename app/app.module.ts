import { NgModule }             from '@angular/core';
// import { FormsModule }          from '@angular/forms';
// import { HttpModule }           from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';

// todo: Find out how to type global namespace & module.
// import * as firebase from 'firebase';
// var firebase = require('firebase');

export const firebaseConfig = {
  apiKey:             "AIzaSyBMMzKY4WSPlCjHq0Ph8pJxh5yri63ZWLg",
  authDomain:         "blaze-page.firebaseapp.com",
  databaseURL:        "https://blaze-page.firebaseio.com",
  storageBucket:      "blaze-page.appspot.com",
  messagingSenderId:  "676632217846"
};

// var firebaseInit = firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    BrowserModule
    // firebaseInit
    ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
