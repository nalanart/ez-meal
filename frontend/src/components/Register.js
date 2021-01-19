import './Register.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [registerUser, setRegisterUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = ({ target }) => {
    const { value } = target
    setRegisterUser({
      ...registerUser,
      [target.name]: value
    })
  }

  const register = event => {
    event.preventDefault()
    axios.post('/register', registerUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        setErrorMessage(err.response.data.error)
      })
  }

  return (
    <div className= "Register">
      <h1>Register</h1>
      <form onSubmit={register}>
        <div className="form-group">
          <input type="text" className="form-control" name="firstName" placeholder="First name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Email address" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password1" placeholder="Create password" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password2" placeholder="Repeat password" onChange={handleChange} />
        </div>
        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" className="btn btn-register">Create account</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  )
}
