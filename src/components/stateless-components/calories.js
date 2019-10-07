import React from 'react';
import MealPeriods from './mealPeriods';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function calories(props) {
  let progress = (props.consumed / props.dailyGoal) * 100;

  // so we can move the percentage read out across in line with the progress bar
  let cssLeftMargin = 0;
  if (progress >= 100) {
    progress = 100;
    cssLeftMargin = 93;
  } else {
    cssLeftMargin = progress;
  }

  return (
    <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
      <div className="calories">
        <div className="calories__consumed">
          <span className="data">
            {Math.round(props.breakfastCalories + props.lunchCalories + props.dinnerCalories + props.snackCalories)}
          </span>
          <br />
          <small className="calories-small-font">consumed</small>
        </div>
        <div className="calories__goal">
          <span className="data">{props.dailyGoal}</span>
          <br />
          <small className="calories-small-font">daily goal</small>
        </div>
      </div>
      <LinearProgress
        className="progress-bar"
        variant="determinate"
        color="primary"
        value={Math.round(progress)}
        style={{}}
      />

      <span
        style={{
          fontWeight: '700',
          fontSize: '14px',
          position: 'relative',
          top: '10px',
          marginLeft: Math.round(cssLeftMargin) + '%'
        }}
      >
        {Math.round(progress)}%
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
