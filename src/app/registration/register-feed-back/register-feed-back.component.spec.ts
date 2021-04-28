import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFeedBackComponent } from './register-feed-back.component';

describe('RegisterFeedBackComponent', () => {
  let component: RegisterFeedBackComponent;
  let fixture: ComponentFixture<RegisterFeedBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFeedBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
