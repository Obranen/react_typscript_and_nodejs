import React, {FC} from 'react'
import classes from './ReviewItem.module.css'
import {IReviews} from '../../../../../types/types'
import Button from '../../../../UI/Button/Button'

interface IReviewItem {
  review: IReviews
}

const ReviewItem: FC<IReviewItem> = ({review}) => {

  const replyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(review._id)
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