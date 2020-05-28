import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendouiSliderComponent } from './kendoui-slider.component';

describe('KendouiSliderComponent', () => {
  let component: KendouiSliderComponent;
  let fixture: ComponentFixture<KendouiSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendouiSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendouiSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
