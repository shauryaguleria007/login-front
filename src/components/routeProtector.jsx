import React from 'react'
import { useGetUserQuery } from '../services/userApi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/userSlice'
export const RouteProtector = ({ children }) => {
  const selector = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isLoading } = useGetUserQuery()
  useEffect(() => {
    if (!isLoading && data?.user === null && !selector.email) {
      navigate('/login')
    }
    if (!isLoading && data?.user !== null) {
      dispatch(setUser({ email: data?.user.email, name: data?.user.name }))
    }
  }, [data, isLoading])
  if (isLoading)
    return (
      <div className='form'>
        <div className='formItem'>Loading...</div>
      </div>
    )
  if (selector?.email !== null) return children
}
