import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import RestoDetailScreen from './src/screens/RestoDetailScreen'

const TheNav = createStackNavigator({
    search: SearchScreen,
    RestoDetail: RestoDetailScreen,
}, {
    initialRouteName: 'search',
    defaultNavigationOptions: {
        title: 'Resto by Vento',
    }
})

export default createAppContainer(TheNav)