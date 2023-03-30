import React from 'react'
import me from './me.jpg'

function ProfilePhoto() {
  return (
    <div className='container card col-lg-4 mt-5'>
        <img src={me}   alt='my pic' className='me'/>
    </div>
  )
}

export default ProfilePhoto