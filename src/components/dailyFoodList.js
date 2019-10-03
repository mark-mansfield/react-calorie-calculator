import React from 'react';

export default function dailyFoodList(props) {
  let dailyIntake = props.dailyIntake;
  console.log(dailyIntake);
  return (
    <div className="foodlist">
      {dailyIntake.map((item, index) => (
        <div key={index} className="foodlist__item">
          <div className="foodlist__item-image"><img src={item.thumb} alt={item.food_name} title={item.food_name} /></div>
          <div className="foodlist__item-name">
            <span>{item.food_name}</span>
            <small>
              {item.serving_qty} {item.serving_unit} ({item.total_grams} g)
            </small>
          </div>
          <div className="foodlist__item-info">
            <span>{Math.round(item.total_calories)} Cal</span>
            <div>
              <small>{item.meal_type_selected}</small>
            </div>
          </div>
        </div>
      ))}
      {/* <div key={index} className="foodlist__item">
        <div className="foodlist__item-image">{item.image}</div>
        <div className="foodlist__item-name">
          <span>{item.food_name}</span>
          <small>2 slice (43 g)</small>
        </div>
        <div className="foodlist__item-info">
          <span>{item.calories}Cal</span>

          <small>Dinner</small>
        </div>
      </div> */}
    </div>
  );
}
