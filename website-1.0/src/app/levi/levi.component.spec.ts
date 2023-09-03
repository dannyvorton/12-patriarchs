import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeviComponent } from './levi.component';

describe('LeviComponent', () => {
  let component: LeviComponent;
  let fixture: ComponentFixture<LeviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeviComponent]
    });
    fixture = TestBed.createComponent(LeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
