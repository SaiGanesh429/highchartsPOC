import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HoverWithGsapComponent } from './hover-with-gsap.component';

describe('HoverWithGsapComponent', () => {
  let component: HoverWithGsapComponent;
  let fixture: ComponentFixture<HoverWithGsapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverWithGsapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverWithGsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
