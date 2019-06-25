import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryEntComponent } from './catagory-ent.component';

describe('CatagoryEntComponent', () => {
  let component: CatagoryEntComponent;
  let fixture: ComponentFixture<CatagoryEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
