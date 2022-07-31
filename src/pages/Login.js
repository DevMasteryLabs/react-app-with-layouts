import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'

const USERS = [
    {
        id: 1,
        email: 'user1@test.com',
        password: 'abc123',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.fhc3wykrAnRpcKApKhXiahxaOe8PSHatad31NuIZ0Zg'
    },
    {
        id: 2,
        email: 'user2@test.com',
        password: 'xyz123',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.cat2xMrZLn0FwicdGtZNzL7ifDTAKWB0k1RurSWjdnw'
    },
]

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({email, password});
        const user = USERS.find(u => u.email === email && u.password === password)
        if (user) {
            localStorage.setItem('token', user.token)
            history.replace('/dashboard')
        } else {
            alert('User not found')
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form style={{ display: 'flex', flexDirection: 'column', margin: 20 }} onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login