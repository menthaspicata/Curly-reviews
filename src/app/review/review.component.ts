import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';

interface Review {
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
  public form = {
    review_date: undefined,
    reviewer_name: undefined,
    message: undefined
  };

  review_data: Review[];

  error = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://localhost:8010/review`).subscribe(
      (data: any) => {
        console.log(data);
        this.review_data = data;
      }
    );
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
    console.log(this.form);
    if (this.form.review_date == undefined ||
      this.form.reviewer_name == undefined ||
      this.form.message == undefined) {
      this.error = true;
    }
    if (this.form.reviewer_name == undefined) {
      console.log('нет name');
    }
    if (this.form.message == undefined) {
      console.log('нет message');
    }


    let data = {
      name: this.form.reviewer_name,
      date: new Date(),
      message: this.form.message
    };

    if (this.form.reviewer_name != undefined &&
      this.form.message != undefined) {
      this.http.post(`http://localhost:8010/review`, data).subscribe(
        (res: any) => {

        }
      );
    }


  }
}
