import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Search from './components/search';
import SearchResults from './components/searchResults';
import UserDetails from './components/userDetails';
import Paginator from './components/paginator';
import Calories from './components/calories';
import DailyFoodList from './components/dailyFoodList';
import AddItem from './components/addItem';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#6200ee' }
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      hasSearchResults: false,
      searchDetailsSelected: false,
      searchDetailItem: [],
      searchResults: [],
      searchTerm: '',
      consumed: 0,
      dailyGoal: 1500,
      breakfastCalories: 0,
      lunchCalories: 0,
      dinnerCalories: 0,
      snackCalories: 0
    };
    this.addItem = this.addItem.bind(this);
  }

  // TODO switch out this mocking scenario
  handleSearch = debounce(text => {
    const options = {
      headers: { 'x-app-id': '8f344a08', 'x-app-key': '2e9e174ee9d6b855ab32fdbe36b242fb', 'x-remote-user-id': '0' }
    };
    axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=` + text, options).then(res => {
      console.log(res);
      this.setState({
        hasSearchResults: true
      });

      this.setState(prevState => ({
        searchResults: [...prevState.searchResults, res.data]
      }));
    });

    console.log(this.state.searchResults);
  }, 1000);

  openSearchDetails = idx => {
    console.log(`search item ${idx} selected`);
    this.setState({
      searchDetailsSelected: true,
      searchDetailItem: [this.state.searchResults]
    });
  };

  closeSearchDetails = () => {
    console.log(`search details closed`);
    this.setState({
      searchDetailsSelected: false,
      searchDetailItem: []
    });
  };

  closeSearchResults = () => {
    console.log(`search results closed`);
    this.setState({
      searchDetailsSelected: false,
      hasSearchResults: false,
      searchDetailItem: []
    });
  };

  addItem(item) {
    console.log('adding item');
    console.log(item.meal_type_selected);
    switch (item.meal_type_selected) {
      case 'Breakfast':
        console.log('updating breakfast calories');
        this.setState({ breakfastCalories: this.state.breakfastCalories + item.total_calories });
        break;

      case 'Lunch':
        console.log('updating lunch calories');
        this.setState({ lunchCalories: this.state.lunchCalories + item.total_calories });
        break;

      case 'Dinner':
        console.log('updating dinner calories');
        this.setState({ dinnerCalories: this.state.dinnerCalories + item.total_calories });
        break;

      case 'Snack':
        console.log('updating snack calories');
        this.setState({ snackCalories: this.state.snackCalories + item.total_calories });
        break;

      default:
        break;
    }
    this.setState({
      consumed: this.state.consumed + item.total_calories
    });
    this.closeSearchResults();
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    if (isMobile) {
      return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="header">
              <Search onSearch={this.handleSearch} />
              <UserDetails />
            </header>
            <nav>
              <Paginator />
            </nav>
            <article>
              <Calories
                consumed={this.state.consumed}
                dailyGoal={this.state.dailyGoal}
                breakfastCalories={this.state.breakfastCalories}
                lunchCalories={this.state.lunchCalories}
                dinnerCalories={this.state.dinnerCalories}
                snackCalories={this.state.snackCalories}
              />
            </article>
            <section>
              <DailyFoodList />
            </section>
            {this.state.hasSearchResults && (
              <SearchResults data={this.state.searchResults} onSearchItemSelected={this.openSearchDetails} />
            )}
            {this.state.searchDetailsSelected && (
              <AddItem
                data={this.state.searchDetailItem}
                onSearchItemAdded={this.addItem}
                onClose={this.closeSearchDetails}
              />
            )}
            <div className="add-button">
              <Fab aria-label="add" color="primary">
                <AddIcon />
              </Fab>
            </div>
          </div>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="header">
              <Search onSearch={this.handleSearch} />
              <nav>
                <Paginator />
              </nav>
            </header>
            <section className="section">
              <article className="sidebar">
                <UserDetails />
                <Calories />
              </article>
              <main className="main">
                <DailyFoodList />
              </main>
              {this.state.hasSearchResults && <SearchResults data={this.state.searchResults} />}
            </section>
            <div className="add-button">
              <Fab aria-label="add" color="primary">
                <AddIcon />
              </Fab>
            </div>
          </div>
        </ThemeProvider>
      );
    }
  }
}

export default App;
