import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import reviewRoute from './routes/review.route.js'

const PORT = config.get('port')
const app = express()

app.use(express.json())
app.use('/api', reviewRoute)

async function startApp() {
  try {
    await mongoose.connect(config.get('DB_Url'))
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT http://localhost:${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

startApp()


