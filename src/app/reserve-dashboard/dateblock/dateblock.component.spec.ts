import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateblockComponent } from './dateblock.component';

describe('DateblockComponent', () => {
  let component: DateblockComponent;
  let fixture: ComponentFixture<DateblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
