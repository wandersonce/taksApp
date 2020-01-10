import React from 'react'
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'
import Menu from './screens/Menu'


const MenuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <Agenda title='Today' daysAhead={0} {...props} />,
        navigationOptions: {
            title: 'Today'
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <Agenda title='Tomorrow' daysAhead={1} {...props} />,
        navigationOptions: {
            title: 'Tomorrow'
        }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda title='Week' daysAhead={7} {...props} />,
        navigationOptions: {
            title: 'Week'
        }
    },
    Month: {
        name: 'Month',
        screen: props => <Agenda title='Month' daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Month'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle: {
            color: '#080'
        }

    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: MenuNavigator
    }
}

const MainNavigator =
    createSwitchNavigator(MainRoutes, { initialRouteName: 'Auth' })

export default createAppContainer(MainNavigator)