import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import QuantitySelector from './quantitySelector';

const BootstrapInput = withStyles(theme => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#e8e8e8',
    border: '1px solid #ced4da',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.15px',
    color: '#00000099',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      width: 300,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

class AddItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      food_name: '',
      serving_unit: '',
      serving_weight_grams: 0,
      serving_qty: 1,
      nf_calories: 0,
      serving_size: 0,
      meal_type: '',
      thumb: '',
      total_grams: 0,
      total_calories: 0
    };
  }

  onComponentDidUpdate() {
    console.log('AddItem component updated:');
  }

  componentDidMount() {
    const data = this.props.data;
    this.setState({
      food_name: data.food_name,
      serving_unit: data.serving_unit,
      serving_weight_grams: data.serving_weight_grams,
      serving_qty: data.serving_qty,
      nf_calories: data.nf_calories,
      serving_size: data.serving_size,
      meal_type: 'breakfast',
      thumb: data.thumb,
      total_grams: data.serving_weight_grams,
      total_calories: data.nf_calories
    });
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleMealTimeChange = event => {
    this.setState({ meal_type: event.target.value });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleUpdateQty = qty => {
    this.setState({
      total_grams: this.state.serving_weight_grams * qty,
      total_calories: this.state.nf_calories * qty,
      serving_qty: qty
    });
  };

  handleAddItem = () => {
    this.props.onSearchItemAdded(this.state);
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Modal
        aria-labelledby="add-item-modal"
        aria-describedby="add an item to your daily intake"
        className="modal"
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={this.state.open}>
          <div className="add-item-modal">
            <div className="modal__content">
              <div className="add-item-modal__row padding-bottom-16">
                <div className="modal__row-item">
                  <img src={this.state.thumb} alt="item name" title="item name" />
                  <div className="item-name">{this.state.food_name}</div>
                </div>
                <div className="modal-close">
                  <CloseIcon onClick={this.handleClose} color="primary" />
                </div>
              </div>
              <div className="add-item-modal__row padding-bottom-20">
                <QuantitySelector onUpdateQuantity={this.handleUpdateQty} serving_unit={this.state.serving_unit} />
                <div className="calculated-weight">
                  <span className="large-text">{Math.round(this.state.total_grams)}</span>
                  <span className="caption">grams</span>
                </div>
                <div className="calculated-calories">
                  <span className="large-text">{Math.round(this.state.total_calories)}</span>
                  <span className="caption">calories</span>
                </div>
              </div>
              <div className="add-item-modal__row padding-bottom-16 last-child">
                <div className="day-selector">
                  <div className="category-title" style={{ margin: '0', marginBottom: '10px' }}>
                    add to today
                  </div>
                  <Select
                    value={this.state.meal_type}
                    onChange={this.handleMealTimeChange}
                    input={<BootstrapInput name="mealTime" id="customized-select" />}
                    placeholder="Breakfast"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'breakfast'}>Breakfast</MenuItem>
                    <MenuItem value={'lunch'}>Lunch</MenuItem>
                    <MenuItem value={'dinner'}>Dinner</MenuItem>
                    <MenuItem value={'snack'}>Snack</MenuItem>
                  </Select>
                </div>
                <Button
                  disabled={this.state.total_grams === 0}
                  variant="contained"
                  onClick={this.handleAddItem}
                  color="primary"
                  // className={this.classes.button}
                >
                  ADD
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default AddItem;
