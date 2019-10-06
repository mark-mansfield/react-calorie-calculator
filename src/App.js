import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import moment from 'moment';
import Search from './components/search';
import SearchResults from './components/searchResults';
import UserDetails from './components/userDetails';
import HistoryNavigator from './components/historyNavigator';
import Calories from './components/calories';
import DailyFoodList from './components/dailyFoodList';
import AddItem from './components/addItem';
import './App.css';

// TODO remove mock Data
import { mockSearchData, detailsData } from './mockData';
import DataPoints from './dataPoints';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#6200ee' },
    secondary: { A400: '#ffffff' }
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      hasSearchResults: false,
      searchDetailsSelected: false,
      searchFocused: false,
      searchDetailItem: [],
      searchResults: [],
      searchResultsCommon: [],
      searchResultsBranded: [],
      searchTerm: '',
      dailyGoal: 1500,
      dailyIntake: [],
      dataPoints: DataPoints,
      intakeHistory: [
        'today',
        'yesterday',
        moment(Date.now())
          .subtract(2, 'days')
          .format('DD,MMM')
          .split(',')
          .join(' ')
      ],
      //  0 = today
      intakeHistoryPosition: 0
    };

    // update date  properties
    this.state.dataPoints.data_points[0].date = 'Today';
    this.state.dataPoints.data_points[1].date = 'Yesterday';
    this.state.dataPoints.data_points[2].date = moment(Date.now())
      .subtract(2, 'days')
      .format('DD,MMM')
      .split(',')
      .join(' ');

    // we need  extra props for calculating totals
    this.state.dataPoints.data_points.forEach((item, index) => {
      let tmpObj = {
        total_grams: 0,
        total_calories: 0,
        breakfastCalories: 0,
        lunchCalories: 0,
        dinnerCalories: 0,
        snackCalories: 0,
        ...this.state.dataPoints.data_points[index]
      };
      tmpObj.intake_list.forEach(item => {
        tmpObj.total_grams += item.serving_weight_grams;
        tmpObj.total_calories += item.nf_calories;
        switch (item.meal_type) {
          case 'breakfast':
            tmpObj.breakfastCalories += item.nf_calories;
            break;

          case 'lunch':
            tmpObj.lunchCalories += item.nf_calories;
            break;

          case 'dinner':
            tmpObj.dinnerCalories += item.nf_calories;
            break;

          case 'snack':
            tmpObj.snackCalories += item.nf_calories;
            break;

          default:
            break;
        }
      });
      tmpObj.breakfastCalories = Math.round(tmpObj.breakfastCalories);
      tmpObj.lunchCalories = Math.round(tmpObj.lunchCalories);
      tmpObj.dinnerCalories = Math.round(tmpObj.dinnerCalories);
      tmpObj.snackCalories = Math.round(tmpObj.snackCalories);
      tmpObj.total_grams = Math.round(tmpObj.total_grams);
      tmpObj.total_calories = Math.round(tmpObj.total_calories);
      this.state.dataPoints.data_points[index] = tmpObj;
    });

    this.navigateHistory = this.navigateHistory.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handelFocusSearch = this.handelFocusSearch.bind(this);
  }

  componentDidUpdate() {
    console.log('App component updated:');
    console.log(this.state);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // TODO remove this before submitting
  componentDidMount() {
    console.log('add component did mount');
    console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  // required to get access to nutrition-ix API
  custom_headers = {
    headers: { 'x-app-id': '8f344a08', 'x-app-key': '2e9e174ee9d6b855ab32fdbe36b242fb', 'x-remote-user-id': '0' }
  };

  // prevents call to server every for every char entered in search bar.
  handleSearch = debounce(text => {
    // axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=` + text, this.custom_headers).then(res => {
    //   this.setState(prevState => ({
    //     searchResultsCommon: res.data.common,
    //     searchResultsBranded: res.data.branded
    //   }));
    //   this.setState({ hasSearchResults: true });
    // });
    this.setState({
      searchResultsCommon: this.mockData.common,
      searchResultsBranded: this.mockData.branded,
      hasSearchResults: true
    });
  }, 1000);

  openSearchDetails = (food_name, id = null) => {
    switch (id) {
      case null:
        this.getCommonFoodItemDetails(food_name);
        break;

      default:
        this.getBrandedFoodItemDetails(id);
        break;
    }
  };

  getCommonFoodItemDetails(food_name) {
    axios
      .post(`https://trackapi.nutritionix.com/v2/natural/nutrients`, { query: food_name }, this.custom_headers)
      .then(res => {
        const itemDetail = {
          food_name: res.data.foods[0].food_name,
          serving_unit: res.data.foods[0].serving_unit,
          serving_weight_grams: res.data.foods[0].serving_weight_grams,
          serving_qty: res.data.foods[0].serving_qty,
          nf_calories: res.data.foods[0].nf_calories,
          // TODO  investigate serving size variable, delete in not used
          // serving_size: res.data[0].serving_size,
          meal_type: res.data.foods[0].meal_type,
          thumb: res.data.foods[0].photo.thumb,
          total_grams: res.data.foods[0].serving_weight_grams,
          total_calories: res.data.foods[0].nf_calories
        };
        this.setState({
          searchDetailsSelected: true,
          searchDetailItem: itemDetail
        });
      });
  }

  getBrandedFoodItemDetails(nx_item_id) {
    axios
      .get(`https://trackapi.nutritionix.com/v2/search/item?nix_item_id=` + nx_item_id, this.custom_headers)
      .then(res => {
        // console.log(res);
        const itemDetail = {
          food_name: res.data.foods[0].food_name,
          serving_unit: res.data.foods[0].serving_unit,
          serving_weight_grams: res.data.foods[0].serving_weight_grams,
          serving_qty: res.data.foods[0].serving_qty,
          nf_calories: res.data.foods[0].nf_calories,
          // serving_size: res.data[0].serving_size,
          meal_type: res.data.foods[0].meal_type,
          thumb: res.data.foods[0].photo.thumb,
          total_grams: res.data.foods[0].serving_weight_grams,
          total_calories: res.data.foods[0].nf_calories
        };
        // console.log(itemDetail);
        this.setState({
          searchDetailsSelected: true,
          searchDetailItem: itemDetail
        });
      });
  }

  closeSearchDetails = () => {
    this.setState({
      searchDetailsSelected: false,
      searchDetailItem: []
    });
  };

  closeSearchResults = () => {
    this.setState({
      searchDetailsSelected: false,
      hasSearchResults: false,
      searchDetailItem: []
    });
  };

  addItem(item) {
    const newDataPointsObj = { data_points: [...this.state.dataPoints.data_points] };
    const newDataPoint = { ...this.state.dataPoints.data_points[this.state.intakeHistoryPosition] };


    switch (item.meal_type) {
      case 'breakfast':
        newDataPoint.breakfastCalories += item.total_calories;
        break;

      case 'lunch':
        newDataPoint.lunchCalories += item.total_calories;
        break;

      case 'dinner':
        newDataPoint.dinnerCalories += item.total_calories;
        break;

      case 'snack':
        newDataPoint.snackCalories += item.total_calories;
        break;

      default:
        break;
    }

    newDataPointsObj.data_points[this.state.intakeHistoryPosition] = newDataPoint;
    newDataPointsObj.data_points[this.state.intakeHistoryPosition].total_calories += item.total_calories;
    newDataPointsObj.data_points[this.state.intakeHistoryPosition].intake_list.push(item);

    this.setState({
      dataPoints: newDataPointsObj
    });

    this.closeSearchResults();
  }

  handelFocusSearch() {
    this.setState({
      searchFocused: true
    });
  }

  navigateHistory(action) {
    if (action === '+') {
      if (this.state.intakeHistoryPosition < this.state.intakeHistory.length - 1) {
        this.setState(prevState => ({
          intakeHistoryPosition: this.state.intakeHistoryPosition + 1
        }));
      }
    }
    if (action === '-') {
      if (this.state.intakeHistoryPosition > 0) {
        this.setState(prevState => ({
          intakeHistoryPosition: this.state.intakeHistoryPosition - 1
        }));
      }
    }
  }

  // TODO remove mock Data
  mockData = mockSearchData;
  detailsData = detailsData;

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    if (isMobile) {
      return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="header">
              <Search onSearch={this.handleSearch} focused={this.state.searchFocused} />
              <UserDetails />
            </header>
            <nav>
              <HistoryNavigator
                navigate={this.navigateHistory}
                dailyIntake={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].date}
              />
            </nav>
            <article>
              <Calories
                consumed={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].total_calories}
                dailyGoal={this.state.dailyGoal}
                breakfastCalories={
                  this.state.dataPoints.data_points[this.state.intakeHistoryPosition].breakfastCalories
                }
                lunchCalories={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].lunchCalories}
                dinnerCalories={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].dinnerCalories}
                snackCalories={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].snackCalories}
              />
            </article>
            <section>
              <DailyFoodList dailyIntake={this.state.dataPoints.data_points[this.state.intakeHistoryPosition]} />
            </section>
            {this.state.hasSearchResults && (
              <SearchResults
                common={this.state.searchResultsCommon}
                branded={this.state.searchResultsBranded}
                onClose={this.closeSearchResults}
                onSearchItemSelected={this.openSearchDetails}
              />
            )}
            {this.state.searchDetailsSelected && (
              <AddItem
                data={this.state.searchDetailItem}
                onSearchItemAdded={this.addItem}
                onClose={this.closeSearchDetails}
              />
            )}
            <div className="add-button">
              <Fab aria-label="add" color="primary" onClick={this.handelFocusSearch}>
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
              <Search onSearch={this.handleSearch} focused={this.state.searchFocused} />
              <nav>
                <HistoryNavigator
                  navigate={this.navigateHistory}
                  dailyIntake={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].date}
                />
              </nav>
            </header>
            <section className="section">
              <article className="sidebar">
                <UserDetails />
                <Calories
                  consumed={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].total_calories}
                  dailyGoal={this.state.dailyGoal}
                  breakfastCalories={
                    this.state.dataPoints.data_points[this.state.intakeHistoryPosition].breakfastCalories
                  }
                  lunchCalories={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].lunchCalories}
                  dinnerCalories={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].dinnerCalories}
                  snackCalories={this.state.dataPoints.data_points[this.state.intakeHistoryPosition].snackCalories}
                />
              </article>
              <main className="main">
                <DailyFoodList dailyIntake={this.state.dataPoints.data_points[this.state.intakeHistoryPosition]} />
              </main>
              {this.state.hasSearchResults && (
                <SearchResults
                  common={this.state.searchResultsCommon}
                  branded={this.state.searchResultsBranded}
                  onClose={this.closeSearchResults}
                  onSearchItemSelected={this.openSearchDetails}
                />
              )}
              {this.state.searchDetailsSelected && (
                <AddItem
                  data={this.state.searchDetailItem}
                  onSearchItemAdded={this.addItem}
                  onClose={this.closeSearchDetails}
                />
              )}
            </section>
            <div className="add-button">
              <Fab aria-label="add" color="primary" onClick={this.handelFocusSearch}>
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
