import React from 'react'
import "./btncomp.css"
export default function BtnComp({btntext}) {
  return (
    <div class="menubtn">
    <button>{btntext}</button>
    </div>
  )
}
