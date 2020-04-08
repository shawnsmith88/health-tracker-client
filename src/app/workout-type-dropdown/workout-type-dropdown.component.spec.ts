import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTypeDropdownComponent } from './workout-type-dropdown.component';

describe('WorkoutTypeDropdownComponent', () => {
  let component: WorkoutTypeDropdownComponent;
  let fixture: ComponentFixture<WorkoutTypeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTypeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
