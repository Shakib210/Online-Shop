import express from 'express'
import {authUser,registerUser,getUserProfile,updateUserProfile, deleteUser, getUserbyId,updateUser,getAllUsers} from '../controller/userController.js'

import { protect,admin } from '../middleware/userMiddleware.js'

const router = express.Router();

/* GET users listing. */
router.route('/').post(registerUser).get(protect, admin, getAllUsers)
router.route('/login').post(authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)


router.route('/:id').get(protect,admin,getUserbyId).delete(protect,admin,deleteUser).put(protect,admin,updateUser);


export default router;
