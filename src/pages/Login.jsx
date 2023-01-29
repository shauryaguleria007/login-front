import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Google } from '../components/Google'
import { useLoginMutation } from '../services/userApi'
export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [loginUser, { data, error }] = useLoginMutation()
  const handelSubmit = async (e) => {
    e.preventDefault()
    const user = { email, password }
    await loginUser(user)
  }
  useEffect(() => {
    if (data) {
      setEmail(null)
      setPassword(null)
      navigate('/')
    }
  }, [data])
  // useEffect(() => {}, [error])    send
  return (
    <>
      <div className='form'>
        <Google value={'Login'} />
        <form action='submit' onSubmit={handelSubmit}>
          <div className='formItem'>
            <label htmlFor=''>Email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button>Login</button>
          </div>
        </form>
        <div className='regester'>
          <button>
            <Link to='/Register' style={{ textDecoration: 'none' }}>
              Regester
            </Link>
          </button>{' '}
        </div>
      </div>
    </>
  )
}
