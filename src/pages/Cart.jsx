import React, { useContext } from 'react'
import { CounterContext } from '../components/context/ContextCounter'


function Cart() {

  const { cart, removeFromCart } = useContext(CounterContext)

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>
  }
// 
  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <img src={item.image} width="80" />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart

