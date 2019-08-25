import { NgModule } from '@angular/core';
import { BookRoutingModule } from './book-routing.module';
import { BookCategoryPageComponent } from './pages/book-category-page/book-category-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

@NgModule({
  declarations: [BookPageComponent, BookCategoryPageComponent],
  imports: [BookRoutingModule]
})
export class BookModule {}
