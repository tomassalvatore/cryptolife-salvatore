import React from 'react'
import { Link } from 'react-router-dom'
import TicketsMessage from '../TicketsMessage/TicketsMessage'

const Dashboard = () => {

    return (
        <div>
           <h1 style={{ textAlign: 'center' }}>Your tickets</h1>
                        <TicketsMessage />
            <div className='container d-flex justify-content-center'>
                <Link to="/" className="btn btn-primary" >Back Home</Link>
            </div>
        </div>
    )
}

export default Dashboard
