import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImComponent } from './im.component';

describe('ImComponent', () => {
  let component: ImComponent;
  let fixture: ComponentFixture<ImComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
