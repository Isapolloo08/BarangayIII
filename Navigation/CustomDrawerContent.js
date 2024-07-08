import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Foundation';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const [isSubmenu1Expanded, setIsSubmenu1Expanded] = useState(false);
  const [isSubmenu2Expanded, setIsSubmenu2Expanded] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
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
          <DrawerItemList {...props} />
        </View>
        <View style={styles.drawerContent}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => setIsSubmenu1Expanded(!isSubmenu1Expanded)}
          >
            <Icon1 name={'torsos-all-female'} size={24} color="white" />
            <Text style={styles.drawerItemText}>
              Resident Information{'\n'}and Census Management
            </Text>
            <Icon name={isSubmenu1Expanded ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity>
          {isSubmenu1Expanded && (
            <View style={styles.submenu}>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('RequestDocument')}>
                <Text style={styles.drawerSubItemText}>Request Document</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('ServiceRecord')}>
                <Text style={styles.drawerSubItemText}>Service Record</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('ResidentRegistrationandProfiling')}>
                <Text style={styles.drawerSubItemText}>Resident Registration and Profiling</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('CensusData')}>
                <Text style={styles.drawerSubItemText}>Census Data</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => setIsSubmenu2Expanded(!isSubmenu2Expanded)}
          >
            <Icon1 name={'torsos-all-female'} size={24} color="white" />
            <Text style={styles.drawerItemText}>
              Financial Management{'\n'}and Accounting System
            </Text>
            <Icon name={isSubmenu2Expanded ? 'up' : 'down'} size={24} color="white" />
          </TouchableOpacity>
          {isSubmenu2Expanded && (
            <View style={styles.submenu}>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('BudgetPlanningandMonitoring')}>
                <Text style={styles.drawerSubItemText}>Budget Planning and Monitoring</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('RevenueandExpenseTracking')}>
                <Text style={styles.drawerSubItemText}>Revenue and Expense Tracking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('PayrollManagement')}>
                <Text style={styles.drawerSubItemText}>Payroll Management</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('FinancialManagement')}>
                <Text style={styles.drawerSubItemText}>Financial Management</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('AuditManagement')}>
                <Text style={styles.drawerSubItemText}>Audit Management</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </DrawerContentScrollView>
      <View style={{ borderTopWidth: 1, borderTopColor: '#fff', padding: 15 }}>
        <TouchableOpacity onPress={handleLogout} style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='log-out-outline' size={22} style={{ color: '#fff' }} />
            <Text style={{ fontSize: 15, fontFamily: 'Roboto', marginLeft: 10, color: '#fff' }}>
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
  submenu: {
    paddingLeft: 20,
  },
});

export default CustomDrawerContent;
