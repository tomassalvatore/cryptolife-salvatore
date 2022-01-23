import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext} from 'react'
import { Link} from 'react-router-dom'


const Cart = () => {
    const { cartContent, clear, removeIdem } = useContext(CartContext)

    return (
        <div className="container">
            {cartContent.length === 0 ?
                <div>
                    <h1 style={{textAlign:"center"}}>The cart is empty!</h1><br />
                    <Link className="d-grid gap-2 col-6 mx-auto  btn btn-secondary" to="/"> Back Home </Link>
                </div> :
                <div>
                    <h1>Cart</h1>
                    <table className="table table-light table-hover table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col"><button className="btn btn btn-outline-danger" onClick={() => clear()}>Empty cart</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartContent.map(producto => {
                                return (
                                    <tr key={producto.id}>
                                        <td > {producto.name}</td>
                                        <td> {producto.description} </td>
                                        <td className='text-center'> {producto.quantity} </td>
                                        <td> {producto.price}BTC </td>
                                        <td><button className='align-items-center btn btn-outline-danger' onClick={() => removeIdem(producto.id)}>Remove</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            {cartContent.map(producto => {
                                return (
                                    <tr>
                                        <th colSpan="3">TOTAL</th>
                                        <th>{producto.price + (producto.quantity * producto.price)}BTC</th>
                                    </tr>
                                )
                            })}
                        </tfoot>
                    </table>
                    <Link to="/form" className='align-items-center btn btn-outline-success'>Finish buy</Link>
                </div>
            }
        </div>
    )
}

export default Cart
