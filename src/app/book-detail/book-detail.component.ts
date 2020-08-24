import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  book = this.bookService.getBook()

  edit(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["book-edit"]);
  }

  delete(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-delete"]);
  }
}
