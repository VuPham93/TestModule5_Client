import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBookList()
  }

  bookList;

  booksNumber: number;

  search: any;

  getBookList = () => {
    this.bookService.getBookList().subscribe(
      response => {this.bookList = response; this.booksNumber = this.bookList.length;},
      error => console.error(error)
    );
  }

  detail(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-detail"])
  }

  edit(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-edit"]);
  }

  delete(book: any) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-delete"]);
  }

  findBook() {
    let foundBooks = [];
    for (let i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].title.toLowerCase().includes(this.search.toLowerCase())) {
        foundBooks.push(this.bookList[i])
      }
    }

    if (this.search != '') {
      this.bookList = foundBooks
    } else
      this.getBookList()
  }
}
