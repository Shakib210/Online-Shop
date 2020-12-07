import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer,userDeleteReducer,userUpdateProfileReducer,userListReducer,userUpdateReducer } from './Reducers/userReducer'

import { productCreateReducer, productUpdateReducer, productListReducer ,productDetailsReducer, productDeleteReducer, productTopRatedReducer,productReviewCreateReducer,productCategoryListReducer, productCategoryTopListReducer } from './Reducers/productReducer'
import { cartReducer} from './Reducers/cartReducer'

import {orderCreateReducer, orderDeliverReducer, orderDetailsReducer,orderListMyReducer,orderListReducer,orderPayReducer} from './Reducers/orderReducer'

const reducer= combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productList: productListReducer,
    productDetails:productDetailsReducer,
    productDelete: productDeleteReducer,
    userDetails: userDetailsReducer,
    userDelete: userDeleteReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  productCategory: productCategoryListReducer,
  productCategoryTop: productCategoryTopListReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

  const initialState = {
    cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
  }

  const middleware=[thunk]

  const store =createStore(
      reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
  )

  export default store