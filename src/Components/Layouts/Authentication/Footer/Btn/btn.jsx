import React from 'react'
import "./btn.css"

function btn(props) {
  return (
    <div>

      <div className='btnOrane'>
        <a href='/JobRoles'><button className='orangeBtn'>{props.text}</button></a>
      </div>

    </div>
  )
}

export default btn