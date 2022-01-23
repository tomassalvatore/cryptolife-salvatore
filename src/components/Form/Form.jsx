import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div>
            <div className='container'>
                    <h2 style={{marginTop: "1em", marginBottom: "1em"}}>Load your data</h2>
                    <form >
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder='Enter your full name'
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder='Enter your phone number'
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                placeholder='Enter your adress'
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                name="email"
                                placeholder='Enter your email adress'
                            />
                        </div>
                        <button onClick={() => {
                            localStorage.removeItem('cart')
                        }} className='btn btn-success me-2'>Confirm buy</button>
                        <Link to="/dashboard" className="btn btn-primary" onClick={() => {
                            localStorage.removeItem('cart')
                        }}>Check buy status</Link>
                    </form>
                </div>
        </div>
    )
}

export default Form
