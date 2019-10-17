import { Component, OnInit } from '@angular/core';

import { ReviewService } from '../review.service';

interface Review {
  review_date: string;
  message: string;
}

@Component({
  selector: 'app-reviews-ua',
  templateUrl: './reviews-ua.component.html',
  styleUrls: ['./reviews-ua.component.scss']
})
export class ReviewsUaComponent implements OnInit {
  review_data: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService
      .getReviewsList( 'review-ua' )
      .subscribe(   (data: any) => {
        this.review_data = data;
      });
  }

}
