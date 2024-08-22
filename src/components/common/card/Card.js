import React, { useState } from 'react'
import './card.css'
import ActiveHeart from '../../../assets/svg/ActiveHeart'
import InactiveHeart from '../../../assets/svg/InactiveHeart'


function Card({ item, index }) {
  const [click, setClick] = useState(false)
  return (
    <div class="product-card">
      <div class="product-image" />
      <div class="product-info">
        <div class="product-name">{item?.name}</div>
        <div class="product-price">
          <p style={{ fontSize: '14px' }}><span style={{ textDecoration: 'underline' }}>Sign in</span> or Create an account to see pricing</p>
          <button className='heart-button' onClick={() => setClick(!click)}>{click ? <ActiveHeart /> : <InactiveHeart />}</button>
        </div>
      </div>
    </div>
  )
}

export default Card