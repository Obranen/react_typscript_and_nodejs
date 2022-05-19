import React, {FC} from 'react'
import Reviews from '../Reviews/Reviews';

interface IReviewsPage {}

const ReviewsPage: FC<IReviewsPage> =
  ({}) => {
    return (
      <>
        <Reviews/>
      </>
    )
  }

export default ReviewsPage