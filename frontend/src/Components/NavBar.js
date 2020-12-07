import React,{useState} from 'react'
import {Navbar, Nav,NavDropdown} from 'react-bootstrap'
import { useSelector,useDispatch} from 'react-redux'
import { useHistory} from 'react-router-dom'
import '../App.css'
import { LinkContainer} from 'react-router-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Form,Button} from 'react-bootstrap'
import {faSearch, faCartPlus, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {logout} from '../Actions/userActions'



const NavBar = () => {
  const [keyword, setKeyword] = useState('')
  const history= useHistory()



  const dispatch=useDispatch()
  const userLogin=useSelector((state)=> state.userLogin)
  const {userInfo}=userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }


    return (
        <>
        
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor:'black'}} variant="dark">
                <LinkContainer to='/'>
                <Navbar.Brand  className='ml-5'> <strong>Amazon</strong></Navbar.Brand>
                </LinkContainer>
 
  
  <Navbar.Toggle aria-controls="collasible-nav-dropdown" />
  <Navbar.Collapse id="collasible-nav-dropdown">
    <Nav className="mr-auto">
  

    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        style={{width:'650px'}}
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
       <FontAwesomeIcon icon={faSearch}/>
      </Button>
    </Form>
      


      {userInfo ? (
                <NavDropdown className="ml-2 mt-1" title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className="ml-4">
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown className='mt-1' title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
      <LinkContainer to='/myorderlist'>
      <Nav.Link className="ml-4">Return & Orders</Nav.Link>
      </LinkContainer>
     
      <LinkContainer to="/cart">
      <Nav.Link  className="ml-3"><FontAwesomeIcon icon={faCartPlus} /> Cart</Nav.Link>
      </LinkContainer>
      
     
      
      
    </Nav>
    
  </Navbar.Collapse>

</Navbar>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand className='ml-5'><FontAwesomeIcon icon={faMapMarker} /><small className="ml-2">Deliver to<strong> {userInfo && userInfo.country }</strong></small></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-5">
      <Nav.Link href="#features">Today's Deal</Nav.Link>
      <Nav.Link href="#pricing">Customer Care</Nav.Link>
      <Nav.Link href="#deets">Gift cards</Nav.Link>
      <Nav.Link href="#features">Sell</Nav.Link>
      <Nav.Link href="#pricing">Registry</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
       </>
    )
}

export default NavBar
