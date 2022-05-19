import React, {FC, useState} from 'react'
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import classes from './AddReviews.module.css'
import TextArea from '../../../UI/TextArea/TextArea';
import {IReviews} from '../../../types/types';
import axios from 'axios';

interface IAddReviews {
  reviews: IReviews[]
  setReviews: (r: any) => void
}

const AddReviews: FC<IAddReviews> =
  ({
     reviews,
     setReviews
   }) => {

    const [reviewValue, setReviewValue] = useState({
      nameReview: '',
      descReview: ''
    })

    const addReview = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      const newReview = {
        nameReview: reviewValue.nameReview,
        descReview: reviewValue.descReview,
      }

      axios.post('/api/review/create', newReview)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      setReviews([...reviews, newReview])
      setReviewValue({nameReview: '', descReview: ''})
    }

    const reviewNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setReviewValue({...reviewValue, nameReview: e.target.value})
    }

    const reviewDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setReviewValue({...reviewValue, descReview: e.target.value})
    }

    return (
      <div className={classes.AddReviews}>
        <h3>Добавить комментарий</h3>

        <Input value={reviewValue.nameReview} onChange={reviewNameChange} type={'text'} placeholder={'Имя'}/>

        <TextArea value={reviewValue.descReview} onChange={reviewDescChange} placeholder={'Введите текст отзыва'}/>

        <Button onClick={addReview}>
          Оставить отзыв
        </Button>
      </div>
    )
  }

export default AddReviews