import React from 'react';
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
import Img from '../assets/avatar.png';

const BootstrapInput = withStyles(theme => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#e8e8e8',
    border: '1px solid #ced4da',
    fontSize: 16,
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

class AddItem extends React.Component {
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

  componentDidMount() {
    console.log('component did mount updating state');
    const data = this.props.data[0];
    this.setState({
      food_name: data[0].food_name,
      serving_unit: data[0].serving_unit,
      serving_weight_grams: data[0].serving_weight_grams,
      serving_qty: data[0].serving_qty,
      nf_calories: data[0].nf_calories,
      serving_size: data[0].serving_size,
      meal_type: data[0].meal_type,
      thumb: data[0].thumb,
      total_grams: data[0].serving_weight_grams,
      total_calories: data[0].nf_calories
    });
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleMealTimeChange = event => {
    this.setState({ meal_time: event.target.value });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleUpdateQty = qty => {
    console.log(qty);
    this.setState({
      total_grams: this.state.serving_weight_grams * qty,
      total_calories: this.state.nf_calories * qty
    });

    // this.item.item_qty = qty;
    // console.log(`quantity of item selected is ${qty}`);
  };

  handleAddItem = () => {
    // console.log(`adding your item `);
    // console.log(item);
    this.props.onSearchItemAdded(this.state);
    this.setState({
      open: false
    });
  };

  render() {
    console.log(`data received from parent nad placed into state `);
    console.log(this.state);
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
              <div className="add-item-modal__row padding-bottom-20">
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
                  <span className="large-text">{this.state.total_grams}</span>
                  <small>grams</small>
                </div>
                <div className="calculated-calories">
                  <span className="large-text">{this.state.total_calories}</span>
                  <small>calories</small>
                </div>
              </div>
              <div className="add-item-modal__row padding-bottom-20 last-child">
                <div className="day-selector">
                  <Select
                    value={this.state.meal_type}
                    onChange={this.handleMealTimeChange}
                    input={<BootstrapInput name="mealTime" id="customized-select" />}
                    placeholder="breakfast"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Breakfast'}>Breakfast</MenuItem>
                    <MenuItem value={'lunch'}>Lunch</MenuItem>
                    <MenuItem value={'Dinner'}>Dinner</MenuItem>
                    <MenuItem value={'Snacks'}>Snacks</MenuItem>
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
