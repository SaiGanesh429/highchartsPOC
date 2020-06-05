import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapMultiselectComponent } from './ngx-bootstrap-multiselect.component';

describe('NgxBootstrapMultiselectComponent', () => {
  let component: NgxBootstrapMultiselectComponent;
  let fixture: ComponentFixture<NgxBootstrapMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
