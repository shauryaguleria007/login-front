import React from 'react'
import { useLogoutQuery } from '../services/userApi'
import { useEffect } from 'react'
import { resetUser } from '../features/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isLoading } = useLogoutQuery()
  useEffect(() => {
    if (!isLoading && data && data.success) {
      dispatch(resetUser())
      return navigate('/login')
    }
  }, [data, isLoading])
  return <div>Logging out</div>
}
