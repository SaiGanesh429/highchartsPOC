import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GreensockAnimationComponent } from './greensock-animation.component';

describe('GreensockAnimationComponent', () => {
  let component: GreensockAnimationComponent;
  let fixture: ComponentFixture<GreensockAnimationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GreensockAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreensockAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
