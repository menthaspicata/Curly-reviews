import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://localhost:8010/review-rus`).subscribe(
      (data: any) => {
        console.log(data);
        this.review_data = data;
      }
    );
  }

}
