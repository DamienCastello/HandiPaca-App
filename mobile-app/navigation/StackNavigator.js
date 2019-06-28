// @ts-nocheck
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Used to display custom header on each screens
import stackConfig from './stackConfig';
import MapHandi from '../screen/Map/map'
import Acceuil from '../screen/Accueil/accueil'
import Description from '../screen/Description/Description'
import FormPlaces from '../screen/FormPlaces/formPlaces'
import FormAmenagement from '../screen/FormAmenagements/formAmenagements'
// Screens



const AppStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi},
    Acceuil :{screen: Acceuil},
    Description: {screen: Description},
    FormPlaces :{ screen: FormPlaces},
    FormAmenagement :{screen: FormAmenagement},
    
    
    
  },
  {
    initialRouteName: 'Description',
    ...stackConfig
  }
);
const AuthStack = createStackNavigator(
  {
    MapHandi:{screen:MapHandi},
    Acceuil :{screen: Acceuil},
    Description: {screen: Description},
    FormPlaces :{ screen: FormPlaces},
    FormAmenagement :{screen: FormAmenagement},
    

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