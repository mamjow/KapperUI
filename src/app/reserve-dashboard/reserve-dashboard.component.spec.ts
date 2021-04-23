import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDashboardComponent } from './reserve-dashboard.component';

describe('ReserveDashboardComponent', () => {
  let component: ReserveDashboardComponent;
  let fixture: ComponentFixture<ReserveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
