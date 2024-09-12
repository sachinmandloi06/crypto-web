import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

    const {cartItems} = useSelector((state) => state.cart)

    const total = cartItems.reduce((p,c)=> p + c.market_data.current_price.inr , 0)

    if(cartItems.length === 0) {
      return(
        <h1 className='display-3 text-center my-5 text-secondary'>No Item Added yet In your Cart</h1>
      )
    }

  return (
    <div className='container p-5'>
      <div className="row g-3">
        <div className="col-md-8 col-sm-12">
            <div className="card p-3 rounded-0 ">
            {
                cartItems.map(cart => <CartItem key={cart.id} cart={cart}/>)
            }    
            </div>
        </div>
        <div className="col-md-4 col-sm-12">
                <div className="card rounded-0 p-3">
                <h1 className='display-6'>Items :{cartItems.length}</h1>
                <h1 className='display-6'>Your Total :</h1>
                <h1 className='display-5'>{total.toFixed(3)}</h1>
                <button className='btn btn-primary rounded-0'>Pay Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
