import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ product }) => {


    return (
        <div className="container">
            <div>
                <div className="d-flex flex-wrap justify-content-around">
                {product.map( p =>
                    <Item key={p.id} product={p} />
                )}
                </div>
            </div>
        </div>
    )
}

export default ItemList
