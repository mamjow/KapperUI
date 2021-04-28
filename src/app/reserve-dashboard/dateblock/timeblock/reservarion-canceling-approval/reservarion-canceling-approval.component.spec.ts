import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarionCancelingApprovalComponent } from './reservarion-canceling-approval.component';

describe('ReservarionCancelingApprovalComponent', () => {
  let component: ReservarionCancelingApprovalComponent;
  let fixture: ComponentFixture<ReservarionCancelingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarionCancelingApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarionCancelingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
