import React from 'react'
import './card.css'
import ActiveHeart from '../../../assets/svg/ActiveHeart'

function Card({ item, index }) {
  return (
    <div class="product-card">
      <div class="product-image" />
      <div class="product-info">
        <div class="product-name">{item?.name}</div>
        <div class="product-price">
          <p style={{ fontSize: '14px' }}><span style={{ textDecoration: 'underline' }}>Sign in</span> or Create an account to see pricing</p>
          <ActiveHeart />
        </div>
      </div>
    </div>
  )
}

export default Card