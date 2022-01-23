import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { getCategories} from "../../services/firebase/firebase"

const NavBar = () => {

    const [categories, setCategories] = useState([])

    const { cartContent } = useContext(CartContext)

    useEffect(() => {

        getCategories("categories").then(category => {

            setCategories(category)

        }).catch((error) => {
            console.log("Error searching items", error)
        })

    }, [])


    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
            <div className="container-fluid" >
                <Link to="/" className="navbar-brand text-white fs-3"> CRYPTO LIFE </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        {categories.map(cat =>
                            <li className="nav-item text-white" key={cat.id}>
                                <Link className="nav-link" key={cat.id} to={`/category/${cat.id}`}> {cat.description} </Link>
                            </li>)}
                    </ul>
                    {cartContent.length === 0 ?
                        <Link to="/cart" className="navbar-text d-none">
                            <CartWidget />
                        </Link> :
                        <Link to="/cart" className="navbar-text">
                            <CartWidget />
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar

