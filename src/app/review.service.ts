import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = 'http://localhost:8010/';

  constructor(private http: HttpClient) { }

  getReview(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReview(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + 'review', data);
  }

  updateReview(id: number, data: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + 'review' + `/${id}`, data);
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + 'review' + `/${id}`, { responseType: 'text' });
  }

  getReviewsList( type: string ): Observable<any> {
    return this.http.get(`${this.baseUrl}` + type);
  }
}




