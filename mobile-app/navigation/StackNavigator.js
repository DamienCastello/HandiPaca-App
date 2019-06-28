// @ts-nocheck
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Used to display custom header on each screens
import stackConfig from './stackConfig';
import MapHandi from '../screen/Map/map';
import Acceuil from '../screen/Accueil/accueil';
import FormPlaces from '../screen/FormPlaces/formPlaces';
// Screens



const AppStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi},
    Acceuil :{screen: Acceuil}
  },
  {
    initialRouteName: 'Acceuil',
    ...stackConfig
  }
);
const AuthStack = createStackNavigator(
  {
    MapHandi:{ screen:MapHandi },
    Acceuil :{ screen: Acceuil },
    FormPlaces: { screen: FormPlaces }
  },
  {
    initialRouteName: 'FormPlaces',
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