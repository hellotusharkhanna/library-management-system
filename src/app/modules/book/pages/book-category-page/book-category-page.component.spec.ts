import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategoryPageComponent } from './book-category-page.component';

describe('BookCategoryPageComponent', () => {
  let component: BookCategoryPageComponent;
  let fixture: ComponentFixture<BookCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
