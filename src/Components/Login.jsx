import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [loginForm, setLoginform] = useState({
        Email: '',
        Password: ''
    })
    const loginFormHandler = async (e) => {
        e.preventDefault()
        // console.log(loginForm)
        const loginBody ={
            Email:loginForm.Email,
            Password:loginForm.Password
        }
        try{
            const response = await axios.post('http://127.0.0.1:3001/login', loginBody)
            console.log(response.data)
        } catch(e) {
            console.log('err logging in user', e)
        }
    }
    return (
        <div>
            <br /><br />
            <form onSubmit={loginFormHandler}>
                <b>Email</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="email"
                    value={loginForm.Email}
                    onChange={(e) => setLoginform({ ...loginForm, Email: e.target.value })} />  <br /> <br />
                <b>Password</b>&nbsp;&nbsp;
                <input
                    type="password"
                    value={loginForm.Password}
                    onChange={(e) => setLoginform({ ...loginForm, Password: e.target.value })} /> <br /> <br />
                <button type='submit'>Login</button> &nbsp; &nbsp; &nbsp;
            </form> <br />
            <button type='submit'>Forgot Password?</button>
        </div>
    )
}

export default Login