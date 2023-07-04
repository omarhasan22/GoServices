import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProfComponent } from './filter-prof.component';

describe('FilterProfComponent', () => {
  let component: FilterProfComponent;
  let fixture: ComponentFixture<FilterProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
