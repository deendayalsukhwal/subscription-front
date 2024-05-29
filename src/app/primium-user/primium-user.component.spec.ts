import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimiumUserComponent } from './primium-user.component';

describe('PrimiumUserComponent', () => {
  let component: PrimiumUserComponent;
  let fixture: ComponentFixture<PrimiumUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimiumUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimiumUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
