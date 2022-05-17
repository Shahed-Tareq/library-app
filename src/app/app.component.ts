import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

import { Book } from './books';
import { BooksService } from './books.service';

@Component({
  selector: 'lib-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library';
  books:Book[]=[];
  constructor(private BookSer: BooksService){

  }
  ngOnInit(): void {
 this.BookSer.getBooks().subscribe(data=>{this.books=data})
  }
   async AddTest(){
    const newBook = await this.BookSer.creatBook({title:"palestine" , id:'ddd' , author:"sha" , audition:5 , page:5555 , publishDate:1999} as Book)
  }

}
