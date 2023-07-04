import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevComponent } from './sev.component';

describe('SevComponent', () => {
  let component: SevComponent;
  let fixture: ComponentFixture<SevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
