import React from 'react';
import Icon from '@material-ui/icons/Search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleChange(event) {
    this.props.onSearch(event.target.value);
  }

  componentWillReceiveProps(props) {
    console.log('component was updated');
    console.log(props);
    if (props.focused) {
      this.textInput.current.focus();
    }
  }

  render() {
    return (
      <form>
        <div className="header__search-bar">
          <div className="search-bar-icon">
            <Icon titleAccess="search icon" className="material-icon" color="disabled">
              search
            </Icon>
          </div>

          <input
            ref={this.textInput}
            className="search-bar-input"
            type="text"
            placeholder="Search foods..."
            onChange={this.handleChange.bind(this)}
          ></input>
        </div>
      </form>
    );
  }
}
export default Search;
