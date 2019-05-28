import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryKnwComponent } from './catagory-knw.component';

describe('CatagoryKnwComponent', () => {
  let component: CatagoryKnwComponent;
  let fixture: ComponentFixture<CatagoryKnwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryKnwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryKnwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
