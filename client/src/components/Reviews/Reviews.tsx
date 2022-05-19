import React, {FC} from 'react'
import FormReviews from './FormReviews/FormReviews';

interface IReviews {}

const Reviews: FC<IReviews> =
  ({}) => {
    return (
      <>
        <FormReviews/>
      </>
    )
  }

export default Reviews