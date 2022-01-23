import React from 'react'
import { Link } from "react-router-dom"
import "./styles.css"


const Item = ({ product }) => {

    return (
        <div className="card" style={{width: 300, marginBottom: 5, margin: "1em"}}>
            <img src={`../${product.img}`} className="" alt={product.name}></img>
            <div className='cart-text-container'>
                <h4 className="card-title text-center">{product.name.toUpperCase()}</h4>
                <p className="card-text">Price: {product.price}BTC</p>
                <p className="card-text">{product.stock === 0 ? "NO STOCK AVAILABLE" : `Available stock: ${product.stock}`}</p>
            </div>
            {product.stock === 0 ? <button to={`/item/${product.id}`}className=" btn btn-secondary btn-danger fixed-bottom d-none" disabled>See product</button> : <Link to={`/item/${product.id}`}className="btn btn-outline-dark">See product</Link> }

        </div>
    )
}
export default Item
