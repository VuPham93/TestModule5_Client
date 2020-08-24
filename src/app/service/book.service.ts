import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = 'http://localhost:3000/books';

  book: {
    id: number;
    title: string;
    author: string;
    description: string;
  };

  setBook(book) {
    this.book = book;
  }

  getBook() {
    return this.book;
  }

  getBookList() {
    return this.http.get(this.apiUrl).pipe(
      tap(
        receivedList => JSON.stringify(receivedList)),
      catchError(err => of([]))
    )
  }

  addNewBook(book: any) {
    return this.http.post(this.apiUrl, book).pipe(
      tap(
        res => JSON.stringify(res)),
      catchError(err => of([]))
    )
  }

  editBook(id: Number, book: any) {
    return this.http.put(this.apiUrl + '/' + id, book).pipe(
      tap(
        res => JSON.stringify(res)),
      catchError(err => of([]))
    )
  }

  deleteBook(id: Number) {
    this.http.delete(this.apiUrl + '/' + id).subscribe(result => this.router.navigate([""]));
  }
}
