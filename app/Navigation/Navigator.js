import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default AppNavigator;
