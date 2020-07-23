import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTML5SliderComponent } from './html5-slider.component';

describe('HTML5SliderComponent', () => {
  let component: HTML5SliderComponent;
  let fixture: ComponentFixture<HTML5SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTML5SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTML5SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
