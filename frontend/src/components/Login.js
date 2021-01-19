import './Login.css'
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
const axios = require('axios')

export default function Login({ logInUser }) {
  let history = useHistory()
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = ({ target }) => {
    const { value } = target
    setLoginUser({
      ...loginUser,
      [target.name]: value
    })
  }

  const login = event => {
    event.preventDefault()
    axios.post('/login', loginUser)
      .then(res => {
        console.log(res)
        logInUser(res.data)
        history.push('/')
      })
      .catch(err => {
        setErrorMessage(err.response.data.error)
      })
  }

  return (
    <div className= "Login">
      <h1>LOG IN</h1>
      <form onSubmit={login}>
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Email address" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} />
        </div>
        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" className="btn btn-login">Log in</button>
      </form>
      <p>Don't have an account? <Link to="/register">Create one</Link></p>
    </div>
  )
}