import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentListComponent } from './entertainment-list.component';

describe('EntertainmentListComponent', () => {
  let component: EntertainmentListComponent;
  let fixture: ComponentFixture<EntertainmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
