import express from 'express'
const router= express.Router()
import { createProduct, createProductReview, deleteProduct, getProductById, getProducts, getTopProducts, updateProduct, getProductByCategory,getProductByCategoryTop } from '../controller/productController.js'
import { admin, protect } from '../middleware/userMiddleware.js'

router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top',getTopProducts)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)
router.route('/sub/:category').get(getProductByCategory)
router.route('/sub2/:category').get(getProductByCategoryTop)

export default router