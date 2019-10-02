import React from 'react';

export default function mealPeriods() {
  return (
    <div className="meal-periods">
      <div className="meal-period">
        <span className="meal-period__title">153</span>
        <br />
        <small>breakfast</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">570</span>
        <br />
        <small>lunch</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">453</span>
        <br />
        <small>dinner</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">113</span>
        <br />
        <small>snack</small>
      </div>
    </div>
  );
}
