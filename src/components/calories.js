import React from 'react';
import MealPeriods from './mealPeriods';
import LinearProgress from '@material-ui/core/LinearProgress';
export default function calories(props) {
  console.log((props.consumed / props.dailyGoal) * 100);
  return (
    <div style={{ padding: '15px' }}>
      <div className="calories">
        <div className="calories__consumed">
          <span className="data">{Math.round(props.consumed)}</span>
          <br />
          <small>consumed</small>
        </div>
        <div className="calories__goal">
          <span className="data">{props.dailyGoal}</span>
          <br />
          <small>daily goal</small>
        </div>
      </div>
      <LinearProgress
        className="progress-bar"
        variant="determinate"
        color="primary"
        value={Math.round((props.consumed / props.dailyGoal) * 100)}
        style={{}}
      />

      <span
        style={{
          fontWeight: '700',
          fontSize: '14px',
          position: 'relative',
          top: '10px',
          marginLeft: Math.round((props.consumed / props.dailyGoal) * 100 - 2) + '%'
        }}
      >
        {Math.round((props.consumed / props.dailyGoal) * 100)}%
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
