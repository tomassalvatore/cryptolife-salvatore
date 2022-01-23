import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import {useContext} from "react"


const ItemDetail = ({ item }) => {

    const [quantity, setQuantity] = useState([])


    const {addItem} = useContext(CartContext)

    const onAdd = (counter) => {
        addItem(item, counter)
        setQuantity(counter)

    }

    return (
        <div className="card" style={{width: "18rem", margin: "auto", marginTop: "1em"}}>
            <div>
                <img src={`../${item?.img}`} className="card-img-top" alt={item?.name}></img>
            </div>
            <div className="card-body">
                <h4 className="card-title">{item?.name.toUpperCase()}</h4>
                <p className="card-text">Price: {item?.price}BTC</p>
                <p className="card-text">{item?.description}</p>
                <p className="card-text">Stock: {item?.stock}</p>
                {quantity >= 1 ? <Link to="/cart" className="btn btn-outline-success" style={{marginLeft: 55}}>Proceed to buy</Link> : <ItemCount stock={ item.stock } initial="0" onAdd={onAdd}/>}
            </div>
        </div>
    )
}

export default ItemDetail
