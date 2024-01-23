import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
    const [signupForm, setSignupForm] = useState({
        Name: '',
        Email: '',
        Password: ''
    })

    const signupFormHandler = async (e) => {
        e.preventDefault()
        const signupBody = {
            Name: signupForm.Name,
            Email: signupForm.Email,
            Password: signupForm.Password
        }
        try{
            const response= await axios.post('http://127.0.0.1:3001/users', signupBody)
            console.log(response.data)
            setSignupForm({
                Name:'',
                Email: '' ,
                Password: ''
            })
        } catch(error) {
            console.log('err posting data' ,error)
        }     
    }
    return (
        <div>
            <br /><br />
            <form onSubmit={signupFormHandler}>
                <b>Name</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    placeholder='enter your name to be displayed'
                    value={signupForm.Name}
                    onChange={(e) => setSignupForm({ ...signupForm, Name: e.target.value })} />  <br /> <br />
                <b>Email</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="email"
                    value={setSignupForm.Email}
                    onChange={(e) => setSignupForm({ ...signupForm, Email: e.target.value })} />  <br /> <br />
                <b>Password</b>&nbsp;&nbsp;
                <input
                    type="password"
                    value={signupForm.Password}
                    onChange={(e) => setSignupForm({ ...signupForm, Password: e.target.value })} /> <br /> <br />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Signup