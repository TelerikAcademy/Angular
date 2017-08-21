import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterComponent } from './outer.component';

describe('OuterComponent', () => {
  let component: OuterComponent;
  let fixture: ComponentFixture<OuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
