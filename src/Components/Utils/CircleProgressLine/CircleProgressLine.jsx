import React from 'react'
import './circleProgressLine.css'

function CircleProgressLine() {
  return (
    <div>
      <div className="cont1 flex">
        <div className="circleApp1 one1" > 1 </div>
        <div className="lines1">
          <div className="circleApp1 two1"> 2 </div>
        </div>
        <div className="circleApp1 three1"> 3 </div>
      </div>
    </div>
  )
}

export default CircleProgressLine