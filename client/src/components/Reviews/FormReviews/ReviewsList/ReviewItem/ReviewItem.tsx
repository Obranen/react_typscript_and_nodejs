import React, {FC} from 'react'
import classes from './ReviewItem.module.css';
import ButtonAnswer from '../../../../UI/ButtonAnswer/ButtonAnswer';
import {IReviews} from '../../../../types/types';

interface IReviewItem {
  review: IReviews
}

const ReviewItem: FC<IReviewItem> =
  ({review}) => {
    const answerOnReview = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
    }

    return (
      <>
        <div className={classes.ReviewItemReview}>
          <div className={classes.ReviewItemName}>
            {/*<span>лого </span>*/}
            <span>{review.nameReview}</span>
          </div>

          <div className={classes.ReviewItemText}>
            {review.descReview}
          </div>

          <ButtonAnswer
            onClick={answerOnReview}
            style={{
              float: 'right'
            }}>
            Ответить
          </ButtonAnswer>

          <hr className={classes.ReviewItemHR}/>
        </div>
      </>
    )
  }

export default ReviewItem