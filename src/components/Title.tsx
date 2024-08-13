import React from 'react'

function Title({title}: {title: string}) {
  return (
    <h3 className='text-Green text-2xl md:text-4xl font-bold text-center py-8'>{title}</h3>
  )
}

export default Title