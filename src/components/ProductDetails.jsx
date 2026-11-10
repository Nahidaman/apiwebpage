import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetails.css'

function ProductDetails() {
    const {productid} = useParams()
    const [viewproduct, setviewproduct] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetching(){
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productid}`)
                console.log(response.data)
                setviewproduct(response.data)
            } catch (error) {
                console.log(error)
            }
    }
    fetching();
    },[])

    const backtohome = ()=>{
        navigate('/')
    }


  return (
    <>
        {/* <div>ProductDetails{productid}</div> */}
        <div className='detailsdiv'>
            <img src={viewproduct.image} alt={viewproduct.title}></img>
            <div className="detls">
                <p className='tit'>{viewproduct.title}</p>
                <p className='decs'>Description:<br/> {viewproduct.description}</p>
                <p>Price: ${viewproduct.price}</p>
                <div className="rate">
                    <p>Rating: 🌟{viewproduct.rating?.rate}</p>
                    <p>Reviews: {viewproduct.rating?.count}</p>
                </div>
                <div className="divbtn">
                    <button className='btn'>Add to Cart</button>
                    <button className='homebtn' onClick={backtohome}>Back to Home</button>
                </div>
                    
            </div>
        </div>
        
        
    </>
  )
}

export default ProductDetails