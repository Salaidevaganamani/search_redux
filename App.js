import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import ProductList from "./components/products";
import { Provider } from "react-redux";
import store from "./store";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ProductList />
        </View>
      </Provider>
    );
  }
}

const ListStack = createStackNavigator(
  {
    main: App,
  },
  {
    navigationOptions: {
      headerTitle: "Product Manager",
      headerStyle: {
        backgroundColor: "green"
      },
      headerTintColor: "#fff"
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
  List: ListStack,
  Search: ListStack,
},
{
  navigationOptions: {
    tabBarIcon: <FontAwesome name="list-ul" size={25} color="red" />
  }
}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppNavigator;
