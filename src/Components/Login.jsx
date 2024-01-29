import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [loginForm, setLoginform] = useState({
        email: '',
        password: ''
    })
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const loginFormHandler = async (e) => {
        e.preventDefault()
        // console.log(loginForm)
        const loginBody = {
            Email: loginForm.email,
            Password: loginForm.password
        }
        try {
            const response = await axios.post('http://127.0.0.1:3001/login', loginBody)
            console.log(response.data)
            setLoginform({
                email: '',
                password: ''
            })
            setToken(response.data.token)
            setUser(response.data)
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('user', JSON.stringify(response.data))
            if (response.data) {
                navigate(`/dashboard/${response.data.Name}`)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <br /><br />
            <form onSubmit={loginFormHandler}>
                <b>Email</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginform({ ...loginForm, email: e.target.value })} />  <br /> <br />
                <b>Password</b>&nbsp;&nbsp;
                <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginform({ ...loginForm, password: e.target.value })} /> <br /> <br />
                <button type='submit'>Login</button> &nbsp; &nbsp; &nbsp;
            </form> <br />
            <Link to={'/forgot-password'}>Forgot Password?</Link>
        </div>
    )
}

export default Login