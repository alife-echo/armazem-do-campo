import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from './global/styles/theme';
import Login from './screens/Login';
import Register from './screens/Register';
import Purchase from './screens/Purchase';
import RegisterProduct from './screens/RegisterProduct';

const {Navigator, Screen} = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: theme.pallete.primary,
  },
};

const Router = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        initialRouteName="Purchase"
        headerMode="none"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="Purchase" component={Purchase} />
        <Screen name="RegisterProduct" component={RegisterProduct} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
