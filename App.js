import React from 'react';

import NavigationService from './services/NavigationService';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    return (
      <AppNavigator ref={navigatorRef => { 
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    );
}

