import React from 'react'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
  const handel = () => {
    const { data } = useLogoutQuery()
  }
  return (
    <div className='form'>
      <div className='formItem'>
        <button>
          <Link to='/logout'>Logout</Link>
        </button>
      </div>
    </div>
  )
}
