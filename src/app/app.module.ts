import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp , initializeApp} from '@angular/fire/app'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {provideFirestore  , getFirestore} from'@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { SubscribtionComponent } from './subscribtion/subscribtion.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscribtionComponent,
    HeaderComponent,
    BooksComponent,
    ReactiveFormComponent
  ],
  imports: [
    //firebase config
provideFirebaseApp(()=>initializeApp(environment.firebase)),
//firestore config  
provideFirestore(()=>getFirestore()),
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
