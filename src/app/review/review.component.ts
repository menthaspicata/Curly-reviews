import {Component, OnInit, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material/snack-bar';

import {ReviewService} from '../review.service';

interface Review {
  id: number;
  review_date: string;
  reviewer_name: string;
  message: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  public single_review = {
    id: undefined,
    review_date: undefined,
    reviewer_name: undefined,
    message: undefined
  };

  review_data: Review[];

  selectedReview: Review;

  error = false;

  constructor(private reviewService: ReviewService,
              private _snackBar: MatSnackBar) {
  }

  openSnackBar() {
    this._snackBar.open('Отзыв успешно отправлен', '', {
      duration: 3000
    })
  }

  ngOnInit() {
    this.reviewService
      .getReviewsList('review')
      .subscribe((data: any) => {
        this.review_data = data;
      });
  }

  nameValid = new FormControl('', [Validators.required]);
  messageValid = new FormControl('', [Validators.required]);

  getErrorMessageName() {
    return this.nameValid.hasError('required') ? 'Введите ваше имя' :
      '';
  }

  getErrorMessageReview() {
    return this.messageValid.hasError('required') ? 'Введите ваш отзыв' :
      '';
  }

  send() {
    if (!this.single_review.id) {
      if (this.single_review.review_date == undefined ||
        this.single_review.reviewer_name == undefined ||
        this.single_review.message == undefined) {
        this.error = true;
      }

      let data = {
        name: this.single_review.reviewer_name,
        date: new Date(),
        message: this.single_review.message
      };

      if (this.single_review.reviewer_name != undefined &&
        this.single_review.message != undefined &&
        this.single_review.reviewer_name.trim().length != 0 &&
        this.single_review.message.trim().length != 0) {
        this.reviewService
          .createReview(data)
          .subscribe(
            suc => {
              this.openSnackBar();
            }
          );
      }
    } else {
      if (this.single_review.reviewer_name != undefined &&
        this.single_review.message != undefined &&
        this.single_review.reviewer_name.trim().length != 0 &&
        this.single_review.message.trim().length != 0) {
        this.reviewService
          .updateReview(this.single_review.id, this.single_review)
          .subscribe(
            suc => {
              this.openSnackBar();
            }
          )
      }
    }
  }

  onSelect(single_review): void {
    this.single_review = single_review;
  }

  delete(id) {
    this.reviewService
      .deleteReview(id)
      .subscribe(
        (res) => {
          this.review_data = this.review_data.filter((review) => {
            return review.id !== id;
          });
        }
      )

  }
}
