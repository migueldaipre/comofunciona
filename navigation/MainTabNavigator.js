import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import Languages from '../screens/Languages';

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
        header: null,
      }
    },
    Languages: {
      screen: Languages,
      navigationOptions: {
        headerTransparent: true,
        headerTintColor: '#FFF',
      }
    }
  }
);

export default HomeStack;
