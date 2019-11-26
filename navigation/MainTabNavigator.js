import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const HomeStack = createStackNavigator(
  {
    SplashScreen,
    HomeScreen,
  }
);

export default HomeStack;
