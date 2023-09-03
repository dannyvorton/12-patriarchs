import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebulunComponent } from './zebulun.component';

describe('ZebulunComponent', () => {
  let component: ZebulunComponent;
  let fixture: ComponentFixture<ZebulunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZebulunComponent]
    });
    fixture = TestBed.createComponent(ZebulunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
