import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHeaderComponent } from './first-header.component';

describe('FirstHeaderComponent', () => {
  let component: FirstHeaderComponent;
  let fixture: ComponentFixture<FirstHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
