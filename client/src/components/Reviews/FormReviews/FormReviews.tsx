import React, {FC, useEffect, useState} from 'react'
import classes from './FormReviews.module.css'
import AddReviews from './AddReviews/AddReviews'
import ReviewsList from './ReviewsList/ReviewsList'
import {IReviews} from '../../../types/types'
import axios from 'axios'

const FormReviews: FC = () => {
  const [reviews, setReviews] = useState<IReviews[]>([])

  async function getAll() {
    await axios.get('api/review/getAll')
    .then(function (response) {
      setReviews([...reviews, ...response.data])
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    getAll()
  }, [])

  const removeReview = (review: { _id: number }) => {
    setReviews(reviews.filter(r => r._id !== review._id))
  }

  return (
    <form className={classes.FormReviews}>
      <AddReviews reviews={reviews} setReviews={setReviews}/>
      <ReviewsList removeReview={removeReview} reviews={reviews}/>
    </form>
  )
}

export default FormReviews