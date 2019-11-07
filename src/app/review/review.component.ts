import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  registerForm: FormGroup;
  submitted = false;

  constructor(private reviewService: ReviewService,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {
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

    this.registerForm = this.formBuilder.group({
      'reviewer_name' : ['', [Validators.required, Validators.minLength(2)]],
      'message' : ['', [Validators.required, Validators.minLength(30)]]
    })
  }

  get formControls() { return this.registerForm.controls; }

  send() {
    if (!this.single_review.id) {
      this.submitted = true;

      if (this.registerForm.invalid) {
        return;
      }

      let data = {
        name: this.single_review.reviewer_name,
        date: new Date(),
        message: this.single_review.message
      };

      this.reviewService
        .createReview(data)
        .subscribe(
          suc => {
            this.openSnackBar();
          }
        );
    } else {
      this.submitted = true;

      if (this.registerForm.invalid) {
        return;
      }

      this.reviewService
        .updateReview(this.single_review.id, this.single_review)
        .subscribe(
          suc => {
            this.openSnackBar();
          }
        )
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
