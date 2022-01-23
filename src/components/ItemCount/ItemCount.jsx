import React, { useState } from 'react'



const ItemCount = ({ stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(0)

    const add = () => {
        counter < stock ? setCounter(counter + 1) : setCounter(counter)

    }

    const substract = () => {
        counter > initial ? setCounter(counter - 1) : setCounter(counter)
    }

    return (

        <div className="row d-md-flex justify-content-md-center">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                            <button className="btn btn-outline-secondary" onClick={() => substract()} >-</button>
                            <p className="card-text">{counter}</p>
                            <button className="btn btn-outline-secondary" onClick={() => add()}>+</button>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <button className="btn btn-outline-success" onClick={() => onAdd(counter)}type="button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount

