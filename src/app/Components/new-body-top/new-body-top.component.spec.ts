import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBodyTopComponent } from './new-body-top.component';

describe('NewBodyTopComponent', () => {
  let component: NewBodyTopComponent;
  let fixture: ComponentFixture<NewBodyTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBodyTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBodyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
