import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Meta from '../Components/Meta'
import {listProducts} from '../Actions/productAction'

const HomeScreen2 = ({ match }) => {
    const keyword=match.params.keyword

    const pageNumber= match.params.pageNumber || 1
    const dispatch=useDispatch()
    const productList= useSelector((state)=>state.productList)
    const {loading, error, products}= productList

    useEffect(()=>{
        dispatch(listProducts(keyword,pageNumber))
    },[dispatch, keyword, pageNumber])
console.log(keyword)

    return (
      <>
      <Meta />
      < div className='container my-2'>
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
    </>
      )
    
}

export default HomeScreen2
