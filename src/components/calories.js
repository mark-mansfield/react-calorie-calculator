import React from 'react';
import MealPeriods from './mealPeriods';
import LinearProgress from '@material-ui/core/LinearProgress';
export default function calories(props) {
  return (
    <div style={{ padding: '15px' }}>
      <div className="calories">
        <div className="calories__consumed">
          <span className="data">{props.consumed}</span>
          <br />
          <small>consumed</small>
        </div>
        <div className="calories__goal">
          <span className="data">{props.dailyGoal}</span>
          <br />
          <small>daily goal</small>
        </div>
      </div>
      <LinearProgress className="progress-bar" variant="determinate" color="primary" value={80} style={{}} />

      <span
        style={{
          fontWeight: '700',
          fontSize: '14px',
          position: 'relative',
          top: '10px',
          marginLeft: 'calc(80% - 15px)'
        }}
      >
        80%
      </span>
      <MealPeriods
        breakfast={props.breakfastCalories}
        lunch={props.lunchCalories}
        dinner={props.dinnerCalories}
        snack={props.snackCalories}
      />
    </div>
  );
}
