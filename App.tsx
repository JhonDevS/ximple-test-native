import React from 'react';
import {useColorScheme} from './src/hooks/useColorScheme.web';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {createStackNavigator} from '@react-navigation/stack';
import AcceptCreditPage from './src/pages/accept-credit';
import FormInfoPage from './src/pages/form-info';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="form-info"
              component={FormInfoPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="accept-credit"
              component={AcceptCreditPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
export default App;
