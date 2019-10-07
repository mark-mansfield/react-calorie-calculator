import React from 'react';

export default function userDetails() {
  return (
    <div className="user">
      <div className="order-item user__avatar"></div>
      <div className="order-item user__name">
        Jane <span className="surname">Appleseed</span>
      </div>
      <div className="order-item user__weight">
        <h2>57</h2>kg
      </div>
      <div className="order-item user__height">
        <h2>163</h2>cm
      </div>
    </div>
  );
}
