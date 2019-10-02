import React from 'react';
import Fade from '@material-ui/core/Fade';
import Img from '../assets/avatar.png';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  data = JSON.parse(JSON.stringify(this.props.data));

  launchPop(idx) {
    console.log(idx);
    this.props.onSearchItemSelected(idx);
  }

  render() {
    return (
      <div>
        <Fade in={true}>
          <div className="search-results">
            <div className="search-results__content">
              <div className="search-result__category">
                <div className="search-results__category-title">Common</div>
                <div className="search-result__item" onClick={() => this.launchPop(1)}>
                  <div className="search-result__item-image">
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    <span>pizza</span>
                  </div>
                </div>
                <div className="search-result__item" onClick={() => this.launchPop(2)}>
                  <div className="search-result__item-image">
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    <span>pizza</span>
                  </div>
                </div>
                <div className="search-result__item" onClick={() => this.launchPop(3)}>
                  <div className="search-result__item-image">
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    <span>pizza</span>
                  </div>
                </div>
              </div>
              {/* branded */}
              <div className="search-result__category">
                <div className="search-results__category-title">Branded</div>
                <button>launch popup</button>
                <div className="search-result__item" onClick={() => this.launchPop(4)}>
                  <div className="search-result__item-image">
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    hard salami and mild c.....
                    <small>cheesewich</small>
                  </div>
                </div>
                <div className="search-result__item" onClick={() => this.launchPop(5)}>
                  <div className="search-result__item-image">
                    {' '}
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    hard salami and mild c.....
                    <small>cheesewich</small>
                  </div>
                </div>
                <div className="search-result__item" onClick={() => this.launchPop(6)}>
                  <div className="search-result__item-image">
                    {' '}
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    hard salami and mild c.....
                    <small>cheesewich</small>
                  </div>
                </div>
                <div className="search-result__item" onClick={() => this.launchPop(7)}>
                  <div className="search-result__item-image">
                    {' '}
                    <img src={Img} alt="select this item" title="select this item" />
                  </div>
                  <div className="search-result__item-name">
                    hard salami and mild c.....
                    <small>cheesewich</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default SearchResults;
