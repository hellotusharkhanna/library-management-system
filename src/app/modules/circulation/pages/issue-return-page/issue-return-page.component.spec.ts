import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReturnPageComponent } from './issue-return-page.component';

describe('IssueReturnPageComponent', () => {
  let component: IssueReturnPageComponent;
  let fixture: ComponentFixture<IssueReturnPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueReturnPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReturnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
