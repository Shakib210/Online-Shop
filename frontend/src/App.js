import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/loginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProductEditScreen from './Screens/productEditScreen'
import ProductListScreen from './Screens/productListScreen'
import HomeScreen2 from './Screens/HomeScreen2'
import ProductScreen from './Screens/ProductScreen'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'
import CartScreen from './Screens/CartScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderListScreen from './Screens/OrderListScreen'
import OrderScreen from './Screens/OrderScreen'
import ProfileScreen from './Screens/ProfileScreen'
import UserEditScreen from './Screens/UserEditScreen'
import UserListScreen from './Screens/UserListScreen'
import MyOrderScreen from './Screens/MyOrderScreen'
import CategoryScreen from './Screens/CategoryScreen'
import ProductTopRated from './Screens/ProductTopRated'

 const App=()=> {
  return (
    <>
    <Router>
         <NavBar/>
         <Route path='/' component={HomeScreen}  exact />
         <Route path='/home' component={HomeScreen2}  />
         <Route path='/products/sub/:category' component={CategoryScreen} />
      <main className='pb-3'>
      <Container>
          
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen2} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/myorderlist' component={MyOrderScreen} />
          <Route path='/top/products' component={ProductTopRated} />
        </Container>
      </main>
    <Footer/>  
    </Router>
       
    </>
  )
}

export default App;

