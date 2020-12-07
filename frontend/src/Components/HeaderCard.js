import React from 'react'
import pic1 from '../photo/a.jpg'
import pic2 from '../photo/f.jpg'
import pic3 from '../photo/as.jpg'
import pic from '../photo/b.jpg'
import pic4 from '../photo/getting-back-to-exercise-routine.jpg'
import top from  '../photo/top.jpg'
import beauti from  '../photo/beauti.jpg'
import computer from '../photo/computer.jpg'
import { Link} from 'react-router-dom'
import {Card,Col,Row,Button} from 'react-bootstrap'


function HeaderCard() {
    return (
        <Row className="mx-3">

        <Col sm={12} md={10} lg={8} xl={9}>  
            <Row>
                <Col sm={12} md={6} lg={4} xl={4} className='my-3' style={{height:'400px'}}>     
           <Card className='my-3 p-3 rounded h-100'>
           <Card.Text as='h5'>Shop by Category</Card.Text>
           <Link to={`/home`}>
           <Card.Img src={pic3} variant='top' height="270px" />
           </Link>
           
           <Card.Body>
        
           </Card.Body>
           <Link to={`/home`}>
           Shop now
           </Link>
          
           </Card>
       
                </Col>

                <Col sm={12} md={6} lg={4} xl={4} className='my-3' style={{height:'400px'}}>     
           <Card className='my-3 p-3 rounded h-100'>
           <Card.Text as='h5'>Amazon Basics</Card.Text>
           <Link to={`/products/sub/basics`}>
           <Card.Img src={pic2} variant='top' height="270px" />
           <Card.Body>
        
           </Card.Body>
           See more
           </Link>
          
           </Card>
       
                </Col>

                <Col sm={12} md={6} lg={4} xl={4} className='my-3' style={{height:'400px'}}>     
           <Card className='my-3 p-3 rounded h-100'>
           <Card.Text as='h5'>Electronics</Card.Text>
           <Link to={`/products/sub/electronics`}>
           <Card.Img src={pic1} variant='top' height="270px" />
           <Card.Body>
        
           </Card.Body>
            See more
           </Link>
           </Card>
       
                </Col>

                <Col sm={12} md={6} lg={4} xl={4} className='my-3' style={{height:'400px'}}>     
           <Card className='my-3 p-3 rounded h-100'>
           <Card.Text as='h5'>Top rated product</Card.Text>
           <Link to={`/top/products`}>
     
           <Card.Img src={top} variant='top' height="270px" />
           <Card.Body>
        
           </Card.Body>
           Shop now
           </Link>
           </Card>
       
                </Col>


                <Col sm={12} md={6} lg={4} xl={4} className='my-3' style={{height:'400px'}}>     
           <Card className='my-3 p-3 rounded h-100'>
           <Card.Text as='h5'>Computers & Accessories</Card.Text>
           <Link to={`/products/sub/computer`}>
     
           <Card.Img src={computer} variant='top' height="270px" />
           <Card.Body>
        
           </Card.Body>
           Shop now
           </Link>
           </Card>
       
                </Col>


                <Col sm={12} md={6} lg={4} xl={4} className='my-3' style={{height:'400px'}}>     
           <Card className='my-3 p-3 rounded h-100'>
           <Card.Text as='h5'>Beauty picks</Card.Text>
           <Link to={`/products/sub/makeup`}>
           <Card.Img src={beauti} variant='top' height="270px" />
           <Card.Body>
        
           </Card.Body>
            Shop now

           </Link>
           </Card>
       
                </Col>
            </Row>    
        
        </Col>


  


        <Col key="ekhan Theke Pasher Kaj Shuru" className="my-3">
        <Card className='my-3 p-2 rounded' height={'120px'}>
           <Card.Text as='h5'>Sign in for the best experience</Card.Text>
            
           <Card.Body>
                <Link to="/login">
                <Button style={{width:'200px', backgroundColor:'#f3ce72', color:'black'}}>Sign In securly</Button>
                </Link>
           </Card.Body>
          
           </Card> 

           <Card className='mt-3 p-3 rounded' style={{marginBottom:'33px'}}>
           <Card.Img src={pic} variant='top' style={{height:'220px'}} />
           </Card>    


             
           <Card className='my-3 p-3 rounded'>
           <Card.Text as='h4'>Get fit at home</Card.Text>
           <Link to='/products/sub/makeup'>
           <Card.Img src={pic4} variant='top' height="270px" />
           </Link>
           
           <Card.Body>
        
           </Card.Body>
           <a href="/">Explore now</a>
           </Card>
       
            
  
           
        </Col>
        
        
      </Row>
    )
}

export default HeaderCard
