import React, {FC} from 'react'
import classes from './ReviewsList.module.css'
import {IReviews} from '../../../types/types'
import ReviewItem from './ReviewItem/ReviewItem'

interface IReviewsList {
  reviews: IReviews[]
}

const ReviewsList: FC<IReviewsList> =
  ({
     reviews
   }) => {

    return (
      <div className={classes.ReviewsList}>
        <h3 className={classes.ReviewsListTitle}>Отзывы:</h3>

        <div className={classes.ReviewsListNav}>
          <div>Всего отзывов: {reviews.length}</div>
          <div>Упорядочить - популярные или новые</div>
        </div>

        {reviews.map((review, index) =>
          <ReviewItem key={index} review={review}/>
        )}
      </div>
    );
  }

export default ReviewsList