import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { } from 'react-fontawesome'
import Rating from './Rating'

const Product = ({ product }) => {
  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...": str;
}
    return (
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' width="150px" height="240px" />
        </Link>
  
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <p style={{fontSize:'17px'}}>{truncate(product.name,40)}</p>
            </Card.Title>
          </Link>
  
          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
  
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
  
  export default Product