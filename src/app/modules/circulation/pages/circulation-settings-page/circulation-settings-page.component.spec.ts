import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationSettingsPageComponent } from './circulation-settings-page.component';

describe('CirculationSettingsPageComponent', () => {
  let component: CirculationSettingsPageComponent;
  let fixture: ComponentFixture<CirculationSettingsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculationSettingsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculationSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
