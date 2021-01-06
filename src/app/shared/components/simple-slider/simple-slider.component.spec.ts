import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleSliderComponent } from './simple-slider.component';

describe('SimpleSliderComponent', () => {
  let component: SimpleSliderComponent;
  let fixture: ComponentFixture<SimpleSliderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
