import { Component, OnInit } from '@angular/core';

import { ReviewService } from '../review.service';

interface Review {
  review_date: string;
  message: string;
}

@Component({
  selector: 'app-reviews-rus',
  templateUrl: './reviews-rus.component.html',
  styleUrls: ['./reviews-rus.component.scss']
})
export class ReviewsRusComponent implements OnInit {
  review_data: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService
      .getReviewsList('review-rus')
      .subscribe(   (data: any) => {
        this.review_data = data;
      });
  }

}
