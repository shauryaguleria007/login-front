import React from 'react'
export const Google = ({ value }) => {
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_URL}/api/v1//api/v1/auth/login/google`,
      '_self'
    )
  }
  return (
    <div className='regester'>
      <button onClick={googleAuth}>{`Google ${value}`}</button>
    </div>
  )
}
