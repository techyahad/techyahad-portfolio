
import React from 'react'

const Grid: React.FC = ({ image }) => {
  return (
    <div className="relative group">
      <img className="h-auto max-w-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105" src={image} alt="" />
    </div>


  )
}

export default Grid