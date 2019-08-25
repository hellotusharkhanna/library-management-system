import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingsPageComponent } from './general-settings-page.component';

describe('GeneralSettingsPageComponent', () => {
  let component: GeneralSettingsPageComponent;
  let fixture: ComponentFixture<GeneralSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
