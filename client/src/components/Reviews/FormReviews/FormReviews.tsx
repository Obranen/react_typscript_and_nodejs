import React, {FC, useEffect, useState} from 'react'
import classes from './FormReviews.module.css'
import AddReviews from './AddReviews/AddReviews'
import ReviewsList from './ReviewsList/ReviewsList'
import {IReviews} from '../../types/types';
import axios from 'axios';

interface IFormReviews {
}


const FormReviews: FC<IFormReviews> =
  ({}) => {
  const [reviews, setReviews] = useState<IReviews[]>([])

    async function getAll() {
      const response = await axios.get('api/review/getAll')
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

    return (
      <form className={classes.FormReviews}>
        <AddReviews reviews={reviews} setReviews={setReviews}/>
        <ReviewsList reviews={reviews}/>
      </form>
    )
  }

export default FormReviews