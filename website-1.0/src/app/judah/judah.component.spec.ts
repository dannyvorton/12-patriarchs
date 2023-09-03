import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudahComponent } from './judah.component';

describe('JudahComponent', () => {
  let component: JudahComponent;
  let fixture: ComponentFixture<JudahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudahComponent]
    });
    fixture = TestBed.createComponent(JudahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
