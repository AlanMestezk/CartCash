import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import { Home } from '../features/Home/screens'
import { Cart } from '../features/Cart/screens'

const Stack = createNativeStackNavigator()

export const Routes = ()=>{

    return(

        <Stack.Navigator>

            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='Cart' 
                component={Cart} 
                options={{headerTitle: 'My Shop Cart'}}
            />


        </Stack.Navigator>

    )
}