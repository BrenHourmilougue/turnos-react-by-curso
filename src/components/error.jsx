import {useState, useEffect} from 'react'

const error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 mb-3 rounded-md font-bold'>
        <p>{children}</p>
    </div>
  )
}

export default error