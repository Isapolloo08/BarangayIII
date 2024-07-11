// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import SplashScreens from './Screen/SplashScreen';
import LoginScreen from './Screen/LogInScreen';
import CustomHeader from './Navigation/CustomHeader';
import CustomDrawerContent from './Navigation/CustomDrawerContent';
import HomeScreen from './Screen/HomeScreen';
import Header_subscreen from './Navigation/Header_subscreen';
import SubScreen1 from './Resident Information and CM/RequestDocument';
import SubScreen2 from './Resident Information and CM/ServiceRecord';
import SubScreen3 from './Resident Information and CM/ResidentRegistrationandProfiling';
import SubScreen4 from './Resident Information and CM/CensusData';
import FMAS1 from './FMAS/AuditManagement';
import FMAS2 from './FMAS/FinancialManagement';
import FMAS3 from './FMAS/PayrollManagement';
import FMAS4 from './FMAS/RevenueandExpenseTracking';
import FMAS5 from './FMAS/BudgetPlanningandMonitoring';
import IRCM1 from './Incident Report and CM/BlotterList';
import IRCM2 from './Incident Report and CM/BlotterFrom'
import IRCM3 from './Incident Report and CM/CaseReport';
import IRCM4 from './Incident Report and CM/SummonSchedule';
import CDSM1 from './CDSM/Dashboard';
import CDSM2 from './CDSM/ProgramPlanningandScheduling';
import CDSM3 from './CDSM/Events';
import CDSM4 from './CDSM/ResourceManagement';
import CDSM5 from './CDSM/BeneficiaryManagement';
import CDSM6 from './CDSM/Notification';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const RequestDocumentStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_RequestDocument" 
            component={SubScreen1} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const ServiceRecord = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_ServiceRecord" 
            component={SubScreen2} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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


const RRPStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_ResidentRegistrationandProfiling" 
            component={SubScreen3} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const CensusDataStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_CensusData" 
            component={SubScreen4} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const BPMStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_BudgetPlanningandMonitoring" 
            component={FMAS5} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const RETStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_RevenueandExpenseTracking" 
            component={FMAS4} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const PMStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_PayrollManagement" 
            component={FMAS3} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const FMStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_FinancialManagement" 
            component={FMAS2} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const AuditStack1 = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_AuditManagement" 
            component={FMAS1} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

const BFStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="BLOTTER FORM" 
            component={IRCM2} 
            options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#710808', // Set header background color to maroon
                },
                headerTintColor: '#fff', // Set header text color to white
                headerTitleAlign: 'center', // Center the header title
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: -8,
                         }}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Ionicons name="menu" size={40} color="white" />
                    </TouchableOpacity>
                ),
            })}
        />
    </Stack.Navigator>
);

const BLStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="BLOTTER LIST" 
            component={IRCM1} 
            options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#710808', // Set header background color to maroon
                },
                headerTintColor: '#fff', // Set header text color to white
                headerTitleAlign: 'center', // Center the header title
                headerLeft: () => (
                    <TouchableOpacity
                    style={{ marginLeft: -8,
                     }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Ionicons name="menu" size={40} color="white" />
                </TouchableOpacity>
                ),
            })}
        />
    </Stack.Navigator>
);

const CSStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="CASE REPORT" 
            component={IRCM3} 
            options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#710808', // Set header background color to maroon
                },
                headerTintColor: '#fff', // Set header text color to white
                headerTitleAlign: 'center', // Center the header title
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: -8,
                         }}
                        onPress={() => navigation.toggleDrawer()}
                    >
                        <Ionicons name="menu" size={40} color="white" />
                    </TouchableOpacity>
                ),
            })}
        />
    </Stack.Navigator>
);

const SSCStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="SUMMON SCHEDULE" 
            component={IRCM4} 
            options={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#710808', // Set header background color to maroon
                },
                headerTintColor: '#fff', // Set header text color to white
                headerTitleAlign: 'center', // Center the header title
                headerLeft: () => (
                    <TouchableOpacity
                    style={{ marginLeft: -8,
                     }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Ionicons name="menu" size={40} color="white" />
                </TouchableOpacity>
                ),
            })}
        />
    </Stack.Navigator>
);


const DBStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Dashboard" 
            component={CDSM1} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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


const PPSStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="ProgramPlanningandSchedulin" 
            component={CDSM2} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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


const EventStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Events" 
            component={CDSM3} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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


const RMStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="ResourceManagement" 
            component={CDSM4} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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


const BMStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="BeneficiaryManagement" 
            component={CDSM5} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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


const NotifStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Notification" 
            component={CDSM6} 
            options={({ navigation }) => ({
                header: () => <Header_subscreen navigation={navigation} />,
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

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
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
                component={HomeStack}
                options={({ navigation }) => ({
                    header: () => <Header_subscreen navigation={navigation} />,
                    // No drawerLabel option means the label will not be shown
                })}
            />
            <Drawer.Screen
                name="RequestDocument"
                component={RequestDocumentStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ServiceRecord"
                component={ServiceRecord}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ResidentRegistrationandProfiling"
                component={RRPStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="CensusData"
                component={CensusDataStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="BudgetPlanningandMonitoring"
                component={BPMStack}
                options={({ navigation }) => ({
                    header: () => <Header_subscreen navigation={navigation} />,
                    // No drawerLabel option means the label will not be shown
                })}
            />
            <Drawer.Screen
                name="RevenueandExpenseTracking"
                component={RETStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="PayrollManagement"
                component={PMStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="FinancialManagement"
                component={FMStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="AuditsManagement"
                component={AuditStack1}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                <Drawer.Screen
                name="BlotterForm"
                component={BFStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="BlotterList"
                component={BLStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="CaseReport"
                component={CSStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="SummonSchedule"
                component={SSCStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                <Drawer.Screen
                name="Dashboard"
                component={DBStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ProgramPlanningandSchedulin"
                component={PPSStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                <Drawer.Screen
                name="Events"
                component={EventStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ResourceManagement"
                component={RMStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="BeneficiaryManagement"
                component={BMStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="Notification"
                component={NotifStack}
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
      drawerSubItemText: {
        fontSize: 16,
        color: 'white',
      },

});
