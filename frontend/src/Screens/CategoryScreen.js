import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Meta from '../Components/Meta'
import {listProductCategory} from '../Actions/productAction'

const CategoryScreen = ({match}) => {
    const category=match.params.category

   
    const dispatch=useDispatch()
    const productCategory= useSelector((state)=>state.productCategory)
    const {loading, error, products}= productCategory


    useEffect(()=>{
        dispatch(listProductCategory(category))
    },[dispatch,match,category])


    return (
        < div className='container my-2'>
          <Meta />
          <h1 className='mt-2'>Latest Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              
            </>
          )}
        </div>
      )
    
}
export default CategoryScreen
