import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { First2HeaderComponent } from './first2-header.component';

describe('First2HeaderComponent', () => {
  let component: First2HeaderComponent;
  let fixture: ComponentFixture<First2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ First2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(First2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
