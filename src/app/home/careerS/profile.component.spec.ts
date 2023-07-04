import { ComponentFixture, TestBed } from '@angular/core/testing';

import { careerS } from './careerS.component';

describe('ProfileComponent', () => {
  let component: careerS;
  let fixture: ComponentFixture<careerS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ careerS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(careerS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
