import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  book = this.bookService.getBook()

  delete() {
    this.bookService.deleteBook(this.book.id);
  }
}
