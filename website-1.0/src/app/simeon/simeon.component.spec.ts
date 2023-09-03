import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimeonComponent } from './simeon.component';

describe('SimeonComponent', () => {
  let component: SimeonComponent;
  let fixture: ComponentFixture<SimeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimeonComponent]
    });
    fixture = TestBed.createComponent(SimeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
