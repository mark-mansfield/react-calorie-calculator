import React from 'react';

export default function dailyFoodList() {
  return (
    <div className="foodlist">
      <div className="foodlist__item">
        <div className="foodlist__item-image">image</div>
        <div className="foodlist__item-name">
          <span>pizza</span>
          <small>2 slice (43 g)</small>
        </div>
        <div className="foodlist__item-info">
          <span>570 cal</span>

          <small>Dinner</small>
        </div>
      </div>
    </div>
  );
}
