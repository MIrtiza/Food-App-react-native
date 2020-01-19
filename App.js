import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/searchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator({
  Search:SearchScreen ,
  ResultsShows: ResultsShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Bussiness Search'
  }
});



export default createAppContainer(navigator)




