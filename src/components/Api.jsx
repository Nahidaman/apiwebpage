import { useState, useEffect } from 'react'
import axios from 'axios'
import './Api.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CounterContext } from './context/ContextCounter'

function Api() {
    const [data, setData] = useState([])
    const Navigate = useNavigate()
    const [count, setCount] = useState({})
    const {increment} = useContext(CounterContext);

    useEffect(() => {
        async function fetching() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetching();
    }, [])


    const viewdetails = (id) => {
        Navigate(`/ProductDetails/${id}`)
    }


    const increments = (id) => {
        setCount((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    }

    const decrement = (id) => {
        setCount((prev) => ({
            ...prev,
            [id]: (prev[id] > 0 ? prev[id] - 1 : 0),
        }));
    }


    const addcart = (id)=> {
        const quantity = count[id] ?? 1;
        setCount((prev) => ({
            ...prev,
            [id]:1
        }))
        increment(quantity);
    }

    return (
        <>
            <div className="search">
                <input type='text' placeholder=' Find the Product...' />
                <button type='submit'>Search</button>
            </div>
            <div className="product">
                {data.map((item) => (
                    <div key={item.id} className='prod'>
                        <div className='imgdiv'>
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div className='pp'><p>{item.title}</p></div>
                        <div className="price"><p>Price:${item.price}</p></div>
                        <div className="divbtn">
                                <div className='countdiv'>
                                    <button onClick={() => decrement(item.id)} className='countbtn'>-</button>
                                    <p>{count[item.id] || 0}</p>
                                    <button onClick={() => increments(item.id)} className='countbtn'>+</button>
                                </div>
                            <button className='buybtn' onClick={() => addcart(item.id)}>Add to Cart</button>
                            <button className='cartbtn' onClick={() => viewdetails(item.id)}>View Details</button>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Api