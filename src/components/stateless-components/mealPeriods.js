import React from 'react';

export default function mealPeriods(props) {
  return (
    <div className="meal-periods">
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.breakfast)}</span>
        <br />
        <small className="calories-small-font">breakfast</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.lunch)}</span>
        <br />
        <small className="calories-small-font">lunch</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.dinner)}</span>
        <br />
        <small className="calories-small-font">dinner</small>
      </div>
      <div className="meal-period">
        <span className="meal-period__title">{Math.round(props.snack)}</span>
        <br />
        <small className="calories-small-font">snack</small>
      </div>
    </div>
  );
}
