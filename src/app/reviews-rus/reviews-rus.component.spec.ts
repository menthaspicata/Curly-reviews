import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsRusComponent } from './reviews-rus.component';

describe('ReviewsRusComponent', () => {
  let component: ReviewsRusComponent;
  let fixture: ComponentFixture<ReviewsRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
