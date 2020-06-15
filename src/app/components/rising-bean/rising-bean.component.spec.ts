import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisingBeanComponent } from './rising-bean.component';

describe('RisingBeanComponent', () => {
  let component: RisingBeanComponent;
  let fixture: ComponentFixture<RisingBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisingBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisingBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
