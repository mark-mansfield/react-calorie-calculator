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
      item_name: 'Cheese',
      item_qty: 0,
      meal_time: 'Breakfast',
      portion_weight: 23,
      calories_per_portion: 113,
      grams: 0,
      calories: 0
    };
  }

  handleMealTimeChange = event => {
    this.setState({ meal_time: event.target.value });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleUpdateQty = qty => {
    this.setState({
      item_qty: qty,
      grams: this.state.portion_weight * qty,
      calories: this.state.calories_per_portion * qty
    });

    // this.item.item_qty = qty;
    // console.log(`quantity of item selected is ${qty}`);
  };

  handleAddItem = () => {
    // console.log(`adding your item `);
    // console.log(item);
    this.props.onSearchItemAdded(this.state);
  };

  render() {
    return (
      <Modal
        aria-labelledby="add-item-modal"
        aria-describedby="add an item to your daily intake"
        className='modal'
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={true}>
          <div className="add-item-modal">
            <div className="modal__content">
              <div className="add-item-modal__row padding-bottom-20">
                <div className="modal__row-item">
                  <img src={Img} alt="item name" title="item name" />
                  <div className="item-name">Cheese</div>
                </div>
                <div className="modal-close">
                  <CloseIcon onClick={this.handleClose} color="primary" />
                </div>
              </div>
              <div className="add-item-modal__row padding-bottom-20">
                <QuantitySelector onUpdateQuantity={this.handleUpdateQty} />
                <div className="calculated-weight">
                  <span className="large-text">{this.state.grams}</span>
                  <small>grams</small>
                </div>
                <div className="calculated-calories">
                  <span className="large-text">{this.state.calories}</span>
                  <small>calories</small>
                </div>
              </div>
              <div className="add-item-modal__row padding-bottom-20 last-child">
                <div className="day-selector">
                  <Select
                    value={this.state.meal_time}
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
                  variant="contained"
                  onClick={this.handleAddItem}
                  color="primary"
                  // className={this.classes.button}
                >
                  ADD
                </Button>
              </div>
              <h2>{this.props.data}</h2>
            </div>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default AddItem;
