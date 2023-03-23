import React, { useState } from 'react'
import '../Login&Register/Login.css'
export const Login = () => {
    const [user ,setUser]=useState({
        email:"",
        password:""
    })

    const  handleChange = e => {
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
  return (
    <div>
        {console.log("User",user)}

<form action="">
    <h3>Login </h3>
    <input type="text"  name='email' value={user.value} placeholder='Username / Email Id'onChange={handleChange} />
    <input type="password"  name='password'value={user.value}  placeholder='Password'onChange={handleChange} />
    <button>Login</button>
</form>
    </div>
  )
}
