import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyDelayedMembersPageComponent } from './notify-delayed-members-page.component';

describe('NotifyDelayedMembersPageComponent', () => {
  let component: NotifyDelayedMembersPageComponent;
  let fixture: ComponentFixture<NotifyDelayedMembersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyDelayedMembersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyDelayedMembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
