// @ts-nocheck
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Used to display custom header on each screens
import stackConfig from './stackConfig';
import MapHandi from '../screen/Map/map'
import Acceuil from '../screen/Accueil/accueil'
import AboutUs from '../screen/AboutUs/aboutus'
import Description from '../screen/Description/description'
// Screens



const AppStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi},
    Acceuil :{screen: Acceuil},
    AboutUs:{screen: AboutUs},
    Description:{screen: Description}
    
    
  },
  {
    initialRouteName: 'Acceuil',
    ...stackConfig
  }
);
const AuthStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi},
    Acceuil :{screen: Acceuil},
    AboutUs:{screen: AboutUs},
    Description:{screen: Description}
  },
  {
    initialRouteName: 'Acceuil',
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