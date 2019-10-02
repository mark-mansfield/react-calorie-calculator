import React from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

export default function paginator() {
  return (
    <div className="paginator">
      <div className="paginator__previous">
        <ChevronLeft titleAccess="search icon" className="material-icon">
          chevron_left
        </ChevronLeft>
      </div>
      <div className="paginator__current">Today</div>
      <div className="paginator__next">
        <ChevronRight titleAccess="search icon" className="material-icon">
          chevron_left
        </ChevronRight>
      </div>
    </div>
  );
}
