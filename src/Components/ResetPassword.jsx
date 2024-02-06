import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function ResetPassword() {
    const {id,token} = useParams()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const body= {
            Password: password,
            token,
            id
        }
        try {
            const response=axios.post(`http://127.0.0.1:3001/reset-password/${id}/${token}`, body)
            // console.log(response.data)
        }catch(e){
            console.log(e)
        }       
    }

    return (
        <div>
            <div className="bg-white p-3 rounded w-25">
                <h4>Reset Password</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>new password</strong>
                        </label>
                        <br />
                        <input
                            type="password"
                            placeholder="Enter new password"
                            autoComplete="off"
                            name="email"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        Update
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ResetPassword