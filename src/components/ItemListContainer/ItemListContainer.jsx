import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import { getProducts } from "../../services/firebase/firebase"

const ItemListContainer = ({ titulo }) => {

    const [product, setProduct] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {

        getProducts("category" , "==", categoryId).then(products => {

            setProduct(products)

        }).catch(error => {

            console.log(error)
        })


        return (() => {
            setProduct([])
        })

    }, [categoryId])

    return (
        <div>
            {product.length !== 0 ?
                <div style={{padding: "1.5em", marginTop: "0.5em"}}>
                    {categoryId===undefined ?
                    <h2 style={{textAlign: "center"}}>{titulo}</h2> :
                    <h2 style={{textAlign: "center"}}>{categoryId.toUpperCase()}</h2> }
                    <div className='grid'>
                        <ItemList product={product} />
                    </div>
                </div> :
                <Loader />
            }

        </div>
    )
}

export default ItemListContainer
