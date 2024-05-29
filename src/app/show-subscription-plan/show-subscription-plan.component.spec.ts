import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubscriptionPlanComponent } from './show-subscription-plan.component';

describe('ShowSubscriptionPlanComponent', () => {
  let component: ShowSubscriptionPlanComponent;
  let fixture: ComponentFixture<ShowSubscriptionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubscriptionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
