import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(private bookService: BookService, private router:Router, private fb: FormBuilder) { }

  bookForm: FormGroup;
  book = this.bookService.getBook();
  message = null;

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      id: [this.book.id],
      title: [this.book.title, [Validators.required]],
      author: [this.book.author, [Validators.required]],
      description: [this.book.description, [Validators.required]]
    })
  }

  edit() {
    let book = this.bookForm.value;
    this.bookService.editBook(book.id, book).subscribe(res => {this.message = "Book edited"});
  }

  get bookId(){
    return this.bookForm.get('id')
  }

  get bookTitle(){
    return this.bookForm.get('title')
  }

  get bookAuthor(){
    return this.bookForm.get('author')
  }

  get bookDescription(){
    return this.bookForm.get('description')
  }

  resetMessage() {
    this.message = null;
  }
}
