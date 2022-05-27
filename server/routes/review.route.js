import Router from 'express'
import {ReviewController} from '../controllers/ReviewController.js'

const router = new Router()
const {create, getAll, deleteReview} = ReviewController()

router.post('/review/create', create);
router.get('/review/getAll', getAll);
router.delete('/review/delete/:id', deleteReview);

export default router