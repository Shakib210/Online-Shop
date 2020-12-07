import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../App.css"
import { Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'


function Row({ title,category }) {
    

   const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(`/api/products/sub2/${category}`)
            setProducts(request.data);
            return request;
        }
        fetchData();
    },[category])
    return (
        <div className="row mt-3">
               <p className="head1" ><h2>{title}</h2></p>
               <p className="head2 ml-4 mt-2" href="#shop"><Link to={`/products/sub/${category}`}>Shop now</Link></p>
                 
                <div className="row_posters">
                    {products.map((product)=>(
                        <Link to={`/product/${product._id}`}>
                           <Image key={product._id} className='row_poster' src={product.image} alt="img" />
                        </Link>
                         
                    ))}
               
                    
           
                    </div>
            </div>
    )
}

export default Row
