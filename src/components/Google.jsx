import React from 'react'
export const Google = ({ value }) => {
  const googleAuth = () => {
    window.open(`http://localhost:3000/api/v1/auth/login/google`, '_self')
  }
  return (
    <div className='regester'>
      <button onClick={googleAuth}>{`Google ${value}`}</button>
    </div>
  )
}
