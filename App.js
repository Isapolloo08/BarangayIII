// App.js
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Foundation';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreens from './Screen/SplashScreen';
import LoginScreen from './Screen/LogInScreen';
import CustomHeader from './Navigation/CustomHeader';
import CustomerDrawer from './Navigation/CustomDrawer';
import HomeScreen from './Screen/HomeScreen';
import CustomDrawerContent from './Navigation/CustomDrawerContent';
import Header from './Navigation/Header_subscreen';
import SubScreen1 from './Resident Information and CM/RequestDocument';
import SubScreen2 from './Resident Information and CM/ServiceRecord';
import SubScreen3 from './Resident Information and CM/ResidentRegistrationandProfiling';
import SubScreen4 from './Resident Information and CM/CensusData';
import FMAS1 from './FMAS/AuditManagement'
import FMAS2 from './FMAS/FinancialManagement'
import FMAS3 from './FMAS/PayrollManagement'
import FMAS4 from './FMAS/RevenueandExpenseTracking'
import FMAS5 from './FMAS/BudgetPlanningandMonitoring'
import IRCM1 from './Incident Report and CM/BlotterList'
import IRCM2 from './Incident Report and CM/BlotterForm'
import IRCM3 from './Incident Report and CM/CaseReport'
import IRCM4 from './Incident Report and CM/SummonSchedule'
import CDSM1 from './CDSM/Dashboard';
import CDSM2 from './CDSM/ProgramPlanningandScheduling';
import CDSM3 from './CDSM/Events';
import CDSM4 from './CDSM/ResourceManagement';
import CDSM5 from './CDSM/BeneficiaryManagement';
import CDSM6 from './CDSM/Notification';
import Header_subscreen from './Navigation/Header_subscreen';
import RICMNavigator from './Navigation/RICMNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Service Record" 
            component={SubScreen2} 
            options={({ navigation }) => ({
                header: ({ navigation }) => (
                    <Header_subscreen navigation={navigation} />
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Ionicons name="menu" size={30} color="#000" />
                    </TouchableOpacity>
                ),
            })}
        />
    </Stack.Navigator>
);

const RequestDocument = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name='Request Document' 
            component={SubScreen1} 
            options={({ navigation }) => ({
            
            })}
        />
    </Stack.Navigator>
);

const CustomDrawerContent1 = ({ navigation }) => {
    const [isSubmenu1Expanded, setIsSubmenu1Expanded] = useState(false);
    const [isSubmenu2Expanded, setIsSubmenu2Expanded] = useState(false);
  
    return (
      <View style={styles.drawerContent}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => setIsSubmenu1Expanded(!isSubmenu1Expanded)}
        >
          <Text  style={styles.drawerItemText} >Resident Information and CM</Text>
          <Icon name={isSubmenu1Expanded ? 'up' : 'down'} size={24} color="white" />
        </TouchableOpacity>
        {isSubmenu1Expanded && (
            <View style={styles.submenu}>
              <TouchableOpacity style={styles.drawerSubItem} onPress={() => navigation.navigate('Request')}>
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
    );
  };

const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator initialRouteName='Home'
             drawerContent={props => <CustomDrawerContent1 {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#ffffff',
                drawerActiveTintColor: '#000',
                drawerInactiveTintColor: '#fff',
                drawerStyle: {
                    backgroundColor: '#710808', // Set the background color of the drawer to maroon
                },
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontFamily: 'Roboto',
                    fontSize: 15,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    header: () => <Header_subscreen navigation={navigation} />,
                    // No drawerLabel option means the label will not be shown
                })}
            />
            <Drawer.Screen
                name="Request"
                component={RequestDocument}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ServiceRecord"
                component={HomeStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
         
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={SplashScreens}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="LogIn"
                    component={LoginScreen}
                    options={{
                        header: () => <CustomHeader title={'Welcome'} />
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={DrawerNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                     <Stack.Screen
                    name="ServiceRecord"
                    component={DrawerNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ResidentRegistrationandProfiling"
                    component={SubScreen3}
                    options={{
                        header: () => <Header title={'Resident Registration and Profiling'} />
                    }}
                />
                <Stack.Screen
                    name="CensusData"
                    component={SubScreen4}
                    options={{
                        header: () => <Header title={'Census Data'} />
                    }}
                />
                          <Stack.Screen
                    name="AuditManagement"
                    component={FMAS1}
                    options={{
                      header: () => <Header title={'Audit Management'} />
                    }}
                />
                <Stack.Screen
                    name="FinancialManagement"
                    component={FMAS2}
                    options={{
                        header: () => <Header title={'Financial Management'} />
                    }}
                />
                <Stack.Screen
                    name="PayrollManagement"
                    component={FMAS3}
                    options={{
                        header: () => <Header title={'Payroll Management'} />
                    }}
                />
                <Stack.Screen
                    name="RevenueandExpenseTracking"
                    component={FMAS4}
                    options={{
                        header: () => <Header title={'Revenueand ExpenseTracking'} />
                    }}
                />
                 <Stack.Screen
                    name="BudgetPlanningandMonitoring"
                    component={FMAS5}
                    options={{
                        header: () => <Header title={'Budget Planning and Monitoring'} />
                    }}
                />
                      <Stack.Screen
                    name="BlotterForm"
                    component={IRCM1}
                    options={{
                        header: () => <Header title={'Financial Management'} />
                    }}
                />
                <Stack.Screen
                    name="BlotterList"
                    component={IRCM2}
                    options={{
                        header: () => <Header title={'Payroll Management'} />
                    }}
                />
                <Stack.Screen
                    name="CaseReport"
                    component={IRCM3}
                    options={{
                        header: () => <Header title={'Revenueand ExpenseTracking'} />
                    }}
                />
                 <Stack.Screen
                    name="SummonSchedule"
                    component={IRCM4}
                    options={{
                        header: () => <Header title={'Budget Planning and Monitoring'} />
                    }}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        component={CDSM1}
                        options={{
                            header: () => <Header title={'Dashboard'} />
                        }}
                    />
                     <Stack.Screen
                        name="ProgramPlanningandSchedulin"
                        component={CDSM2}
                        options={{
                            header: () => <Header title={'Program Planning and Schedulin'} />
                        }}
                    />
                          <Stack.Screen
                        name="Events"
                        component={CDSM3}
                        options={{
                            header: () => <Header title={'Events'} />
                        }}
                    />
                    <Stack.Screen
                        name="ResourceManagement"
                        component={CDSM4}
                        options={{
                            header: () => <Header title={'Resource Management'} />
                        }}
                    />
                    <Stack.Screen
                        name="BeneficiaryManagement"
                        component={CDSM5}
                        options={{
                            header: () => <Header title={'Beneficiary Management'} />
                        }}
                    />
                     <Stack.Screen
                        name="Notification"
                        component={CDSM6}
                        options={{
                            header: () => <Header title={'Budget Planning and Monitoring'} />
                        }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    drawerItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
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
      submenu: {
        paddingLeft: 20,
      },


});
