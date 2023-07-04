import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attendance2Component } from './attendance2.component';

describe('Attendance2Component', () => {
  let component: Attendance2Component;
  let fixture: ComponentFixture<Attendance2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Attendance2Component]
    });
    fixture = TestBed.createComponent(Attendance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
