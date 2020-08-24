import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private bookService: BookService, private router:Router, private fb: FormBuilder) { }

  bookForm: FormGroup;
  message = null;

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  add() {
    let book = this.bookForm.value;
    this.bookService.addNewBook(book).subscribe(res => {this.message = "New book added"});
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
