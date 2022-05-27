import React, {FC} from 'react'
import classes from './ReviewItem.module.css'
import {IReviews} from '../../../../../types/types'
import Button from '../../../../UI/Button/Button'
import axios from 'axios';

interface IReviewItem {
  review: IReviews
  removeReview: (review: { _id: number }) => void
}

const ReviewItem: FC<IReviewItem> = ({review, removeReview}) => {
  const replyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
      axios.delete(`/api/review/delete/${review._id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      removeReview(review)
  }

  return (
    <div className={classes.ReviewItem}>
      <div className={classes.ReviewItemReview}>
        <div className={classes.ReviewItemName}>
          {/*<span>лого </span>*/}
          <span>{review.nameReview}</span>
        </div>

        <div className={classes.ReviewItemText}>
          {review.descReview}
        </div>

        <Button
          onClick={replyHandler}
          className={classes.ReviewItemButtonReply}
        >
          Ответить
        </Button>

        <Button
          onClick={deleteHandler}
          className={classes.ReviewItemButtonDelete}
        >
          Удалить
        </Button>

        <hr className={classes.ReviewItemHR}/>
      </div>
    </div>
  )
}

export default ReviewItem