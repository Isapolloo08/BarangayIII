import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
import Awsome from 'react-native-vector-icons/FontAwesome';
import Awsome6 from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const navigation = useNavigation();

  const toggleSubMenu = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(prevItems => prevItems.filter(prevItem => prevItem !== item));
    } else {
      setExpandedItems(prevItems => [...prevItems, item]);
    }
  };

  const handleLogout = () => {
    // Assuming you have some kind of authentication management in your app,
    // you might want to clear any auth tokens here as well.

    // Reset navigation stack and navigate to SplashScreen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Splash' }],
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#710808' }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#710808' }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ffffff' }}>
          <ImageBackground source={require('../assets/logo.png')} blurRadius={5} style={{ padding: 20, marginBottom: 5 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/profile.png')} style={{ height: 110, width: 110, resizeMode: 'cover' }} />
              <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 30 }}>
                <Text style={{ color: '#000000', fontSize: 30, fontFamily: 'Roboto', fontWeight: 'bold' }}>Miss U</Text>
                <Text style={{ color: '#000000', fontSize: 18 }}>09632991145</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{ paddingTop: 10 }}>
        </View>
        <View style={styles.drawerContent}>
          <TouchableOpacity onPress={() => toggleSubMenu('ResidentInfo')} style={styles.drawerItem}>
            <Icon1 name={'torsos-all-female'} size={24} color="white" />
            <Text style={styles.drawerItemText}>
              Resident Information{'\n'}and Census Management
            </Text>
            <Icon name={expandedItems.includes('ResidentInfo') ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity>
          {expandedItems.includes('ResidentInfo') && (
            <View style={styles.subMenu}>
              <TouchableOpacity onPress={() => props.navigation.navigate('RequestDocument')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Request Document</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ServiceRecord')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Service Record</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ResidentRegistrationandProfiling')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Resident Registration and Profiling</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('CensusData')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Census Data</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            onPress={() => toggleSubMenu('Financial Management')}
            style={styles.drawerItem}
          >
             <Awsome name={'bank'} size={16} color="white" />
            <Text style={styles.drawerItemText}>Financial Management{'\n'}and Accounting System</Text>
            <Icon name={expandedItems.includes('Financial Management') ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity>
          {expandedItems.includes('Financial Management') && (
            <View style={styles.subMenu}>
              <TouchableOpacity onPress={() => props.navigation.navigate('BudgetPlanningandMonitoring')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Budget Planning and Monitoring</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('RevenueandExpenseTracking')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Revenue and Expense Tracking</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('PayrollManagement')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Payroll Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('FinancialManagement')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Financial Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('AuditsManagement')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Audit Management</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={() => toggleSubMenu('Incident Report')}
            style={styles.drawerItem}
          >
            <Awsome6 name={'file-lines'} size={24} color="white" />
            <Text style={styles.drawerItemText}>Incident Report Case{'\n'}Management</Text>
            <Icon name={expandedItems.includes('Incident Report') ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity>
          {expandedItems.includes('Incident Report') && (
            <View style={styles.subMenu}>
              <TouchableOpacity onPress={() => props.navigation.navigate('BlotterForm')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Blotter Form</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('BlotterList')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Blotter List</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('CaseReport')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Case Report</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('SummonSchedule')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Summon Schedule/Calendar</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={() => toggleSubMenu('Community Development')}
            style={styles.drawerItem}
          >
             <Material name={'miscellaneous-services'} size={24} color="white" />
            <Text style={styles.drawerItemText}>Community Development{'\n'}and Services Management</Text>
            <Icon name={expandedItems.includes('Community Development') ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity>
          {expandedItems.includes('Community Development') && (
            <View style={styles.subMenu}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Dashboard</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ProgramPlanningandSchedulin')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Program Planning and Scheduling</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('Events')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Events</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ResourceManagement')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Resource Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('BeneficiaryManagement')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Beneficiary Management</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('Notification')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Notification</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            onPress={() => toggleSubMenu('Administrator')}
            style={styles.drawerItem}
          >
             <Awsome name={'user-circle'} size={24} color="white" />
            <Text style={styles.drawerItemText}>Administrator</Text>
            <Icon name={expandedItems.includes('Administrator') ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity> 
          {expandedItems.includes('Administrator') && (
            <View style={styles.subMenu}>
              <TouchableOpacity onPress={() => props.navigation.navigate('SubScreen3')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Iniisip pa</Text>
              </TouchableOpacity>
            </View>
          )}
           <TouchableOpacity
            onPress={() => toggleSubMenu('History')}
            style={styles.drawerItem}
          >
            <Material name={'history'} size={24} color="white" />
            <Text style={styles.drawerItemText}>History</Text>
            <Icon name={expandedItems.includes('History') ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity> 
          {expandedItems.includes('History') && (
            <View style={styles.subMenu}>
              <TouchableOpacity onPress={() => props.navigation.navigate('SubScreen3')} style={styles.drawerSubItem}>
                <Text style={styles.drawerSubItemText}>Iniisip palang</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </DrawerContentScrollView>
      <View style={{ borderTopWidth: 1, borderTopColor: '#fff', padding: 15 }}>
        <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='log-out-outline' size={22} style={{ color: '#fff' }} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto',
                marginLeft: 10,
                color: '#fff'
              }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#710808',
  },
  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerSubItem: {
    marginLeft: 20,
    marginVertical: 5,
  },
  drawerSubItemText: {
    fontSize: 16,
    color: 'white',
  },
  subMenu: {
    paddingLeft: 20,
  },
});

export default CustomDrawerContent;
