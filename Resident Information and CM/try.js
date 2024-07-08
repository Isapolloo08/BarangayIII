import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Resquest from './RequestDocument'

// Import the RequestDocument screen
import RequestDocument from './Resident Information and CM/RequestDocument';

// Screens for submenus
const Screen1 = () => (
  <View style={styles.screen}>
    <Text>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={styles.screen}>
    <Text>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View style={styles.screen}>
    <Text>Screen 3</Text>
  </View>
);

const Screen4 = () => (
  <View style={styles.screen}>
    <Text>Screen 4</Text>
  </View>
);

// Main screen component with drawer button
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mainMenuItem} onPress={() => navigation.toggleDrawer()}>
        <Text>Main Menu Item</Text>
      </TouchableOpacity>
    </View>
  );
};

// Custom drawer content component
const CustomDrawerContent = ({ navigation }) => {
  const [isSubmenu1Expanded, setIsSubmenu1Expanded] = useState(false);
  const [isSubmenu2Expanded, setIsSubmenu2Expanded] = useState(false);

  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => setIsSubmenu1Expanded(!isSubmenu1Expanded)}
      >
        <Text>Main Menu Item 1</Text>
      </TouchableOpacity>
      {isSubmenu1Expanded && (
        <View style={styles.submenu}>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Screen1')}>
            <Text>Submenu Item 1.1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Screen2')}>
            <Text>Submenu Item 1.2</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => setIsSubmenu2Expanded(!isSubmenu2Expanded)}
      >
        <Text>Main Menu Item 2</Text>
      </TouchableOpacity>
      {isSubmenu2Expanded && (
        <View style={styles.submenu}>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Request')}>
            <Text>Submenu Item 2.1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Screen4')}>
            <Text>Submenu Item 2.2</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('RequestDocument')}>
        <Text>Request Document</Text>
      </TouchableOpacity>
    </View>
  );
};

// Drawer navigator setup
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainScreen" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Screen2" component={Screen2} />
        <Drawer.Screen name="Request" component={Resquest} />
        <Drawer.Screen name="Screen4" component={Screen4} />
        <Drawer.Screen name="RequestDocument" component={RequestDocument} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMenuItem: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContent: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  drawerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  submenu: {
    paddingLeft: 20,
  },
});

export default DrawerNavigator;
