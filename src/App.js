import React, { Component } from 'react';
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
      dailyGoal: 1500
    };
    this.addItem = this.addItem.bind(this);
  }

  // TODO switch out this mocking scenario
  handleSearch = debounce(text => {
    const mockSearchResult = {
      food_name: 'salmon salad',
      serving_unit: 'cup',
      serving_weight_grams: 407.01,
      serving_qty: 1,
      nf_calories: 389.27,
      serving_size: 1.5,
      meal_type: 'lunch',
      thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg'
    };

    this.setState({
      hasSearchResults: true,
      searchTem: text
    });

    this.setState(prevState => ({
      searchResults: [...prevState.searchResults, mockSearchResult]
    }));

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

  // componentDidUpdate() {
  //   if (this.state.searchDetailsSelected) {
  //     console.log(this.state);
  //   }
  // }

  addItem(item) {
    console.log('adding item');
    console.log(item);
    this.setState({
      consumed: item.total_calories
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
              <Calories consumed={this.state.consumed} dailyGoal={this.state.dailyGoal} />
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
