import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
import Matcommunity from 'react-native-vector-icons/MaterialCommunityIcons';
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

  const [nestedExpandedItems, setNestedExpandedItems] = useState([]);

  const toggleNestedSubMenu = (item) => {
    if (nestedExpandedItems.includes(item)) {
      setNestedExpandedItems(nestedExpandedItems.filter((i) => i !== item));
    } else {
      setNestedExpandedItems([...nestedExpandedItems, item]);
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
            <TouchableOpacity 
            onPress={() => toggleNestedSubMenu('Budget Planning and Monitoring')} 
            style={styles.drawerSubItem}
            >
              <Text style={styles.drawerSubItemText}>Budget Planning and Monitoring</Text>
              <Icon name={nestedExpandedItems.includes('Budget Planning and Monitoring') ? 'up' : 'down'} size={24} color="white" />
            </TouchableOpacity>
            {nestedExpandedItems.includes('Budget Planning and Monitoring') && (
              <View style={styles.subSubMenu}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Budget Dashboard')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Budget Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Add Budget')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Add Budget</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Edit Budget')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Edit Budget</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Budget Report')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Budget Report</Text>
                </TouchableOpacity>
              </View>
            )}
          <TouchableOpacity 
            onPress={() => toggleNestedSubMenu('Revenue and Expense Tracking')} 
            style={styles.drawerSubItem}
            >
              <Text style={styles.drawerSubItemText}>Revenue and Expense Tracking</Text>
              <Icon name={nestedExpandedItems.includes('Revenue and Expense Tracking') ? 'up' : 'down'} size={24} color="white" />
            </TouchableOpacity>
            {nestedExpandedItems.includes('Revenue and Expense Tracking') && (
              <View style={styles.subSubMenu}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Transaction Dashboard')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Transaction Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Add Transaction')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Add Transaction</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Edit Transaction')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Edit Transaction</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Transaction Report')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Transaction Report</Text>
                </TouchableOpacity> 
              </View>
            )}
            <TouchableOpacity 
            onPress={() => toggleNestedSubMenu('Payroll Management')} 
            style={styles.drawerSubItem}
            >
               <Text style={styles.drawerSubItemText}>Payroll Management</Text>
               <Icon name={nestedExpandedItems.includes('Payroll Management') ? 'up' : 'down'} size={24} color="white" />
            </TouchableOpacity>
            {nestedExpandedItems.includes('Payroll Management') && (
              <View style={styles.subSubMenu}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Payroll Table')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Payroll Table</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Add Payroll')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Add Payroll</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Edit Payroll<')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Edit Payroll</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Payroll Report')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Payroll Report</Text>
                </TouchableOpacity>
              </View>
            )}
             <TouchableOpacity 
            onPress={() => toggleNestedSubMenu('Financial Management')} 
            style={styles.drawerSubItem}
            >
              <Text style={styles.drawerSubItemText}>Financial Management</Text>
              <Icon name={nestedExpandedItems.includes('Financial Management') ? 'up' : 'down'} size={24} color="white" />
            </TouchableOpacity>
            {nestedExpandedItems.includes('Financial Management') && (
              <View style={styles.subSubMenu}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Financial Table')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Financial Table</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Financial Report')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Financial Report</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity 
            onPress={() => toggleNestedSubMenu('Audit Management')} 
            style={styles.drawerSubItem}
            >
              <Text style={styles.drawerSubItemText}>Audit Management</Text>
              <Icon name={nestedExpandedItems.includes('Audit Management') ? 'up' : 'down'} size={24} color="white" />
            </TouchableOpacity>
            {nestedExpandedItems.includes('Audit Management') && (
              <View style={styles.subSubMenu}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Audit Table')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Audit Table</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Audit Report')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Audit Report</Text>
                </TouchableOpacity>
              </View>
            )}
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
                <Icon name={'form'} size={24} color="white" />
                <Text style={styles.drawerSubItemText}>Blotter Form</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('BlotterList')} style={styles.drawerSubItem}>
              <Awsome6 name={'table-list'} size={24} color="white" />
                <Text style={styles.drawerSubItemText}>Blotter List</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('CaseReport')} style={styles.drawerSubItem}>
              <Matcommunity name={'briefcase-edit-outline'} size={24} color={'white'}/>
                <Text style={styles.drawerSubItemText}>Case Report</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('SummonSchedule')} style={styles.drawerSubItem}>
                <Material name={'schedule'} size={24} color={'white'} /> 
                <Text style={styles.drawerSubItemText}>Summon Schedule/{'\n'}Calendar</Text>
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
              <TouchableOpacity 
                onPress={() => toggleNestedSubMenu('Program Planning and Scheduling')} 
                style={styles.drawerSubItem}
                >
                <Text style={styles.drawerSubItemText}>Program Planning and Scheduling</Text>
                <Icon name={nestedExpandedItems.includes('Program Planning and Scheduling') ? 'up' : 'down'} size={24} color="white" />
              </TouchableOpacity>
              {nestedExpandedItems.includes('Program Planning and Scheduling') && (
              <View style={styles.subSubMenu}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Calendar')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Proposed Program')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Proposed Program</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Program Schedule')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Program Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Approved Program')} style={styles.drawerSubItem}>
                  <Text style={styles.drawernestedSubItemText}>Payroll Report</Text>
                </TouchableOpacity>
              </View>
            )}
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  drawerSubItemText: {
    fontSize: 16,
    color: 'white',
    justifyContent: 'flex-end',
    fontWeight:'bold',
    marginEnd:'auto',
  },
  subMenu: {
    paddingLeft: 20,

  },
  subSubMenu: {
    alignItems: 'flex-start',
    marginLeft:'auto',
  },

  drawernestedSubItemText: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'black',
  }
});

export default CustomDrawerContent;
