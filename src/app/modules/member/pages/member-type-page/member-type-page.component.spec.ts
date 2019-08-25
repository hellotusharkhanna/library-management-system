import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypePageComponent } from './member-type-page.component';

describe('MemberTypePageComponent', () => {
  let component: MemberTypePageComponent;
  let fixture: ComponentFixture<MemberTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
