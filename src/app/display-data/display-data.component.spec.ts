import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayDataComponent } from './display-data.component';

describe('DisplayDataComponent', () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
