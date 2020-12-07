import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Meta from '../Components/Meta'
import {listTopProducts} from '../Actions/productAction'

const ProductTopRated = () => {
  const  dispatch = useDispatch()

    const productTopRated= useSelector((state)=>state.productTopRated)
    const {loading, error, products}= productTopRated
    
    useEffect(() => {
        dispatch(listTopProducts())
     
    }, [dispatch])

    return (
        < div className='container my-2 '>
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

export default ProductTopRated
