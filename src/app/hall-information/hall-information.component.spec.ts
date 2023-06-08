import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallInformationComponent } from './hall-information.component';

describe('HallInformationComponent', () => {
  let component: HallInformationComponent;
  let fixture: ComponentFixture<HallInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HallInformationComponent]
    });
    fixture = TestBed.createComponent(HallInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
