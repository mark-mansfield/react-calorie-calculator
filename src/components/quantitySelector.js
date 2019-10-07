import React, { PureComponent } from 'react';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';

class QuantitySelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      serving_unit: ''
    };
  }

  onComponentDidUpdate() {
    console.log('QuantitySelector component updated:');
  }

  componentDidMount() {
    this.setState({
      serving_unit: this.props.serving_unit
    });
  }

  handleIncrement = () => {
    let qty = this.state.qty;
    this.setState(prevState => {
      return { qty: prevState.qty + 1 };
    });
    qty += 1;
    this.props.onUpdateQuantity(qty);
  };

  handleDeIncrement = () => {
    let qty = this.state.qty;
    if (this.state.qty === 0) {
      return;
    }
    this.setState(prevState => ({
      qty: prevState.qty - 1
    }));
    qty -= 1;
    this.props.onUpdateQuantity(qty);
  };

  render() {
    return (
      <div>
        <div className="quantity-selector">
          <div>
            <small className="title">servings</small>
            <div className="quantity-field">{this.state.qty}</div>
          </div>
          <div className="increment-buttons">
            <div className="increment">
              <UpIcon onClick={this.handleIncrement} />
            </div>
            <div className="de-increment">
              <DownIcon onClick={this.handleDeIncrement} />
            </div>
          </div>
        </div>
        <small className="serving-unit">{this.state.serving_unit}</small>
      </div>
    );
  }
}
export default QuantitySelector;
