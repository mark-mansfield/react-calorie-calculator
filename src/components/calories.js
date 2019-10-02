import React from 'react';
import MealPeriods from './mealPeriods';
import LinearProgress from '@material-ui/core/LinearProgress';
export default function calories() {
  return (
    <div style={{ padding: '15px' }}>
      <div className="calories">
        <div className="calories__consumed">
          <span className="data">1500 cal</span>
          <br />
          <small>consumed</small>
        </div>
        <div className="calories__goal">
          <span className="data">1289 cal</span>
          <br />
          <small>daily goal</small>
        </div>
      </div>
      <LinearProgress className="progress-bar" variant="determinate" color="primary" value={80} style={{}} />

      <span style={{ fontWeight: '700', fontSize: '14px', position: 'relative', top: '10px', marginLeft: 'calc(80% - 15px)' }}>80%</span>
      <MealPeriods />
    </div>
  );
}
