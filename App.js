import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
