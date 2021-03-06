import Review from '../models/Review.js'

export const ReviewController = () => {
  const create = async (req, res) => {
    const {nameReview, descReview} = req.body
    const review = await Review.create({nameReview, descReview})
    res.json(review)
  }

  const getAll = async (req, res) => {
    const reviews = await Review.find()
    return res.json(reviews)
  }

  const deleteReview = async (req) => {
    const {id} = req.params
    await Review.findByIdAndDelete(id)
  }

  return {create, getAll, deleteReview}
}