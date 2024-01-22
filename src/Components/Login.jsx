import React, { useState } from 'react'

function Login() {
    const [loginForm, setLoginform] = useState({
        email: '',
        password: ''
    })
    const loginFormHandler = (e) => {
        e.preventDefault()
        console.log(loginForm)
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
            <button type='submit'>Forgot Password?</button>
        </div>
    )
}

export default Login