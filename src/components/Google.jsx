import React from 'react'
export const Google = ({ value }) => {
  const googleAuth = () => {
    window.open(
      `https://react-login-6gva.onrender.com/api/v1//api/v1/auth/login/google`,
      '_self'
    )
  }
  return (
    <div className='regester'>
      <button onClick={googleAuth}>{`Google ${value}`}</button>
    </div>
  )
}
