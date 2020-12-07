import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import "../App.css"
import { Link} from 'react-router-dom'
import {listProductCategoryTop} from '../Actions/productAction'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

function Wireless({ category }) {
    

   
    const dispatch=useDispatch()
    const productCategoryTop= useSelector((state)=>state.productCategoryTop)
    const {loading, error, products}= productCategoryTop


    useEffect(()=>{
        dispatch(listProductCategoryTop(category))
    },[dispatch,category])
    return (
        <div className="row mt-3">
               <p className="head1" ><h2>Must have Wireless products</h2></p>
               <p className="head2 ml-4 mt-2" href="#shop"><Link to={`/products/sub/wireless`}>Shop now</Link></p>
                 
                {error && <Message>{error}</Message>}
                {loading && <Loader/>}
                <div className="row_posters ml-3">
                    {products.map((product)=>(
                        <Link to={`/product/${product._id}`}>
                           <img key={product._id} className={`row_poster`} src={product.image} alt="img" />
                        </Link>
                         
                    ))}
               
                    
           
                    </div>
            </div>
    )
}

export default Wireless
