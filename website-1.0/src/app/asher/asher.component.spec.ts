import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsherComponent } from './asher.component';

describe('AsherComponent', () => {
  let component: AsherComponent;
  let fixture: ComponentFixture<AsherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsherComponent]
    });
    fixture = TestBed.createComponent(AsherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
