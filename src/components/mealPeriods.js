import React from 'react';

export default function mealPeriods(props) {
  return (
    <div className="meal-periods">
      <div className="meal-period">
        <span className="meal-period__title">{props.breakfast}</span>
        <br />
        <small>breakfast</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{props.lunch}</span>
        <br />
        <small>lunch</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{props.dinner}</span>
        <br />
        <small>dinner</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{props.snack}</span>
        <br />
        <small>snack</small>
      </div>
    </div>
  );
}
