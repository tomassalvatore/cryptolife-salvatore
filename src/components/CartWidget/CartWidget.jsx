import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const {countProducts} = useContext(CartContext)

    return (
        <div>

            <button style={{border: "none"}} className='btn btn-success'><img src={"../images/shopping-cart.svg"} alt="cart"></img> {countProducts()} </button>

        </div>
    )
}

export default CartWidget
