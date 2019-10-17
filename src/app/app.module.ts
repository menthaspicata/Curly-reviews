import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReviewComponent } from './review/review.component';
import { ReviewsUaComponent } from './reviews-ua/reviews-ua.component';
import { ReviewsRusComponent } from './reviews-rus/reviews-rus.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//material
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const appRoutes: Routes =[
  { path: 'review', component: ReviewComponent},
  { path: 'review-rus', component: ReviewsRusComponent},
  { path: 'review-ua', component: ReviewsUaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ReviewsUaComponent,
    ReviewsRusComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCardModule,
    FontAwesomeModule,
    MatSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


