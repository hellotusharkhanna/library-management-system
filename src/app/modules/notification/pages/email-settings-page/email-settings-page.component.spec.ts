import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSettingsPageComponent } from './email-settings-page.component';

describe('EmailSettingsPageComponent', () => {
  let component: EmailSettingsPageComponent;
  let fixture: ComponentFixture<EmailSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
