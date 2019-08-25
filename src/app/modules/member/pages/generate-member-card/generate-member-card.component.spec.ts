import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMemberCardComponent } from './generate-member-card.component';

describe('GenerateMemberCardComponent', () => {
  let component: GenerateMemberCardComponent;
  let fixture: ComponentFixture<GenerateMemberCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateMemberCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
