import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryInfoComponent } from './catagory-info.component';

describe('CatagoryInfoComponent', () => {
  let component: CatagoryInfoComponent;
  let fixture: ComponentFixture<CatagoryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
