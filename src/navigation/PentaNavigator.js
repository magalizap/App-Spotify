import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen'
import LibraryScreen from '../screens/LibraryScreen'
import SearchScreen from '../screens/SearchScreen'
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator()

export default PentaNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {backgroundColor: COLORS.primary},
                    headerTintColor: COLORS.secondary,
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'PentaMusic'}}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Library" component={LibraryScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}