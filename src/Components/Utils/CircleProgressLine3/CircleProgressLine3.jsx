import React from 'react'
import './circleProgressLine3.css'

function CircleProgressLine() {
  return (
    <div className='circleCarrier'>
      <div className="cont3 flex">
        <div className="circleApp3 one3" > 1 </div>
        <div className="lines3">
          <div className="circleApp3 two3"> 2 </div>
        </div>
        <div className="circleApp3 three3"> 3 </div>
      </div>
    </div>
  )
}

export default CircleProgressLine