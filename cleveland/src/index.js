import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './pages/home.js';
import FormScreen from './pages/form.js'

// import { createAppContainer } from 'react-navigation';

const HomeNavigation = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Form: {
        screen: FormScreen,
    },
})

export default createAppContainer(HomeNavigation);