import React from 'react'
export const Google = ({ value }) => {
  const googleAuth = () => {
    window.open(
      `https://react-login-c7xl.onrender.com/api/v1/auth/login/google`,
      '_self'
    )
  }
  return (
    <div className='regester'>
      <button onClick={googleAuth}>{`Google ${value}`}</button>
    </div>
  )
}
