import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import Review from './models/Review.js'

const PORT = config.get('port')
const app = express()

app.use(express.json())

app.post('/api/review/create', async (req, res) => {
  const {nameReview, descReview} = req.body
  const review = await Review.create({nameReview, descReview})
  res.json(review)
})

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find()
  return res.json(reviews)
})

async function startApp() {
  try {
    await mongoose.connect(config.get('DB_Url'), {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT http://localhost:${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

startApp()


