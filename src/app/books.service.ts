import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firestore: Firestore) {}

    getBooks():Observable<Book[]>{
     const col = collection(this.firestore , 'books');
     return collectionData(col ,{idField:'id'}) as Observable<Book[]>;
    
   }
   creatBook(book:Book){
    const col=  collection(this.firestore , 'books');
     return addDoc(col , book) ;
 }
}
