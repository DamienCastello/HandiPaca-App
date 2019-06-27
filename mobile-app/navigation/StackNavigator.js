// @ts-nocheck
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Used to display custom header on each screens
import stackConfig from './stackConfig';
import MapHandi from '../screen/Map/map'
import accueil from '../screen/Accueil/accueil'
// Screens



const AppStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi}
    
    
    
  },
  {
    initialRouteName: 'MapHandi',
    ...stackConfig
  }
);
const AuthStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi}
  },
  {
    initialRouteName: 'MapHandi',
    ...stackConfig
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth'
  }
));