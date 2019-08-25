import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsSettingsPageComponent } from './sms-settings-page.component';

describe('SmsSettingsPageComponent', () => {
  let component: SmsSettingsPageComponent;
  let fixture: ComponentFixture<SmsSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
