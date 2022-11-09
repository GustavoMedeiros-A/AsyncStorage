import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../pages/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}
            />            
            <Stack.Screen
            name='Home'
            component={Home}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='Register'
            component={Register}
            options={{headerShown:false}}
            />


            
        </Stack.Navigator>
    )
}