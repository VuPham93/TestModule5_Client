import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';

const routes: Routes = [
  {path:"",component: BookListComponent},
  {path:"book-detail",component: BookDetailComponent},
  {path:"book-add",component: BookAddComponent},
  {path:"book-edit",component: BookEditComponent},
  {path:"book-delete",component:BookDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
