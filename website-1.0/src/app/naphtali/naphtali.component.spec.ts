import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaphtaliComponent } from './naphtali.component';

describe('NaphtaliComponent', () => {
  let component: NaphtaliComponent;
  let fixture: ComponentFixture<NaphtaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaphtaliComponent]
    });
    fixture = TestBed.createComponent(NaphtaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
