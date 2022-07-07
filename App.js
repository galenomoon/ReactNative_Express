import 'react-native-gesture-handler';

//react-navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//pages
import TaskList from './src/pages/TaskList';

export default function App() {
  const AppDrawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <AppDrawer.Navigator >
        <AppDrawer.Screen name="TaskList" options={{ headerShown: false }} component={TaskList} />
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
}