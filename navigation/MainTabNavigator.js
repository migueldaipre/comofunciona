import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const HomeStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerTransparent: true,
        headerTintColor: '#FFF',
      }
    },
  }
);

export default HomeStack;
