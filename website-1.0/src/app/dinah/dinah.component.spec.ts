import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinahComponent } from './dinah.component';

describe('DinahComponent', () => {
  let component: DinahComponent;
  let fixture: ComponentFixture<DinahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinahComponent]
    });
    fixture = TestBed.createComponent(DinahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
