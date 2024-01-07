import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Discover from '../screens/Discover';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
   return (
      <Tab.Navigator screenOptions={{
         headerShown: false,
         tabBarActiveTintColor: '#000000',
         tabBarInactiveTintColor: '#aaaaaa',
         tabBarHideOnKeyboard: true,
      }}>
         <Tab.Screen
            name='discover'
            component={Discover}
         />
         <Tab.Screen
            name='favorites'
            component={Favorites}
         />
         <Tab.Screen
            name='cart'
            component={Cart}
         />
         <Tab.Screen
            name='profile'
            component={Profile}
         />
      </Tab.Navigator>
   );
}