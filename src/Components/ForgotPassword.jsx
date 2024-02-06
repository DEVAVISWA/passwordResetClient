import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate= useNavigate()
    const [email, setEmail] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const body= {
            Email: email
        }
        try {
            const response=axios.post('http://127.0.0.1:3001/forgot-password', body)
            // console.log(response.data)
            alert('Check your entered Mail')
        }catch(e){
            console.log(e)
        }   
        navigate('/login')    
    }

    return (
        <div>
            <div className="bg-white p-3 rounded w-25">
                <h4>Forgot Password</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            required
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        Send
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ForgotPassword