import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilhahComponent } from './bilhah.component';

describe('BilhahComponent', () => {
  let component: BilhahComponent;
  let fixture: ComponentFixture<BilhahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilhahComponent]
    });
    fixture = TestBed.createComponent(BilhahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
