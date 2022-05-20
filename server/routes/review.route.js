import Router from 'express'
import {ReviewController} from '../controllers/ReviewController.js'

const router = new Router()
const {create, getAll} = ReviewController()

router.post('/review/create', create)
router.get('/review/getAll', getAll)

export default router