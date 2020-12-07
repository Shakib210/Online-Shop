import React, {useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listMyOrders } from '../Actions//orderAction'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const MyOrderScreen = ({history}) => {
     const dispatch= useDispatch()

     const userLogin = useSelector((state) => state.userLogin)
     const { userInfo } = userLogin

     const orderListMy = useSelector((state) => state.orderListMy)
     const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

     useEffect(() => {
        if (!userInfo) {
          history.push('/login')
        } else {
            dispatch(listMyOrders())
          } 
        
      }, [dispatch, history, userInfo])

    return (
        <div>

<h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='m-2'>   <FontAwesomeIcon icon={faTimes} color='red'/></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='m-2'>   <FontAwesomeIcon icon={faTimes} color='red'/></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
     
            
        </div>
    )
}

export default MyOrderScreen
