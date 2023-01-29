import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Google } from '../components/Google'
import { useRegisterMutation } from '../services/userApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/userSlice'
export const Register = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [registerUser, { data, error }] = useRegisterMutation()

  const handelSubmit = async (e) => {
    e.preventDefault()
    if (!email || !name || !password) return
    const user = { email, password, name }
    console.log(user)
    await registerUser(user)
  }
  useEffect(() => {
    if (data) {
      navigate('/login')
    }
  }, [data])
  return (
    <div className='form'>
      <Google value={'Register'} />
      <form action='submit' onSubmit={handelSubmit} style={{ height: '66vh' }}>
        <div className='formItem'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{' '}
        <div className='formItem'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='formItem'>
          <label htmlFor=''>Password</label>
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='formItem'>
          <button>Register</button>
        </div>
      </form>
      <div className='regester'>
        <button>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            Login
          </Link>
        </button>{' '}
      </div>
    </div>
  )
}
