import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmCarbonComponent } from './ibm-carbon.component';

describe('IbmCarbonComponent', () => {
  let component: IbmCarbonComponent;
  let fixture: ComponentFixture<IbmCarbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbmCarbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmCarbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
