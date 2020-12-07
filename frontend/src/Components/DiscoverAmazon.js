import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


 const DiscoverAmazon=()=> {
   
   

        return (
                <div className="row mt-2">
                <p className="head1" ><h2>Discover Amazon</h2></p>
               <p className="head2 ml-4 mt-2"><Link to={`/home`}>
              Shop now  </Link></p>


                <div className="row_posters">
               
                    <img className={`row_poster`} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png" alt="img" />
                    <img className={`row_poster`} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg" alt="img" />
                    <img className={`row_poster`} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg" alt="img" />
                    <img className={`row_poster`} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg" alt="img" />
                    <img className={`row_poster`} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg" alt="img" />
                    <img className={`row_poster`} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg" alt="img" />
           
                    </div>
            </div>
            
        );
    }

    export default DiscoverAmazon;