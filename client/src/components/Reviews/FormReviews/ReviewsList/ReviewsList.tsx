import React, {FC} from 'react'
import classes from './ReviewsList.module.css'
import {IReviews} from '../../../../types/types'
import ReviewItem from './ReviewItem/ReviewItem'

interface IReviewsList {
  reviews: IReviews[],
  removeReview: (review: { _id: number }) => void
}

const ReviewsList: FC<IReviewsList> =
  ({
     reviews,
     removeReview
   }) => {

    return (
      <div className={classes.ReviewsList}>
        <h3 className={classes.ReviewsListTitle}>Отзывы:</h3>

        <div className={classes.ReviewsListNav}>
          <div>Всего отзывов: {reviews.length}</div>
          <div>Упорядочить - популярные или новые</div>
        </div>

        {reviews.map((review) =>
          <ReviewItem removeReview={removeReview} key={review._id} review={review}/>
        )}
      </div>
    );
  }

export default ReviewsList