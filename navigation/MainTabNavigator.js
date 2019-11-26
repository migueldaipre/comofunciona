import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import App from '../App';

const HomeStack = createStackNavigator(
  {
    App,
    HomeScreen,
  }
);

export default HomeStack;
