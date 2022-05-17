import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SubscribtionComponent } from './subscribtion/subscribtion.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'email' , component:SubscribtionComponent},
  {path:'book' , component:BooksComponent},
  {path:'reactive' , component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
