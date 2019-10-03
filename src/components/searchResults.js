import React from 'react';
import Fade from '@material-ui/core/Fade';
import Img from '../assets/avatar.png';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      common: this.props.common
    };
  }

  launchPop(name, id) {
    this.props.onSearchItemSelected(name, id);
  }

  onComponentDidUpdate() {
    console.log('component was updated');
  }

  render() {
    // console.log(this.props.common[1]);
    console.log(this.props.branded[1]);

    return (
      <div>
        <Fade in={true}>
          <div className="search-results">
            <div className="search-results__content">
              <div className="search-result__category">
                <div className="category-title">Common</div>

                {this.props.common.map((item, index) => (
                  <div key={index} className="search-result__item" onClick={() => this.launchPop(item.food_name, null)}>
                    <div className="search-result__item-image">
                      <img src={item.photo.thumb} alt="select this item" title="select this item" />
                    </div>
                    <div className="search-result__item-name">
                      <span>{item.food_name}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* branded */}
              <div className="search-result__category">
                <div className="category-title">Branded</div>

                {this.props.branded.map((item, index) => (
                  <div
                    key={index}
                    className="search-result__item"
                    onClick={() => this.launchPop(item.food_name, item.nix_item_id)}
                  >
                    <div className="search-result__item-image">
                      <img src={item.photo.thumb} alt="select this item" title="select this item" />
                    </div>
                    <div className="search-result__item-name">
                      <span>{item.food_name.substr(0, 23)}...</span>
                      <small>{item.brand_name}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default SearchResults;
