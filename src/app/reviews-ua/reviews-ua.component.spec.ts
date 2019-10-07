import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsUaComponent } from './reviews-ua.component';

describe('ReviewsUaComponent', () => {
  let component: ReviewsUaComponent;
  let fixture: ComponentFixture<ReviewsUaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsUaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
