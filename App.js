// App.js
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CDSM5 from './CDSM/BeneficiaryManagement';
import CDSM1 from './CDSM/Dashboard';
import CDSM3 from './CDSM/Events';
import CDSM6 from './CDSM/Notification';
import CDSM2 from './CDSM/ProgramPlanningandScheduling';
import CDSM4 from './CDSM/ResourceManagement';
import FMAS1 from './FMAS/AuditManagement';
import FMAS5 from './FMAS/BudgetPlanningandMonitoring';
import FMAS2 from './FMAS/FinancialManagement';
import FMAS3 from './FMAS/PayrollManagement';
import FMAS4 from './FMAS/RevenueandExpenseTracking';
import IRCM2 from './Incident Report and CM/BlotterFrom';
import IRCM1 from './Incident Report and CM/BlotterList';
import IRCM3 from './Incident Report and CM/CaseReport';
import IRCM4 from './Incident Report and CM/SummonSchedule';
import CustomDrawerContent from './Navigation/CustomDrawerContent';
import CustomHeader from './Navigation/CustomHeader';
import Header_subscreen from './Navigation/Header_subscreen';
import SubScreen4 from './Resident Information and CM/CensusData';
import Reports, { EditReportScreen, ViewReportScreen } from './Resident Information and CM/Reports';
import RequestDocument from './Resident Information and CM/RequestDocument';
import ResidentAccountRequest from './Resident Information and CM/ResidentAccountRequest';
import ResidentDocumentRequest from './Resident Information and CM/ResidentDocumentRequest';
import ResidentRecords from './Resident Information and CM/ResidentRecords';
import ResidentRegistrationandProfiling from './Resident Information and CM/ResidentRegistrationandProfiling';
import AddResidentRegister from './Resident Information and CM/RICM inside screen/AddResidentRegister';
import ConfirmationScreen from './Resident Information and CM/RICM inside screen/ConfirmationScreen';
import CreateAccount from './Resident Information and CM/RICM inside screen/CreateAccount';
import HeaderRegister from './Resident Information and CM/RICM inside screen/HeaderRegister';
import ListOfRequestDocx from './Resident Information and CM/RICM inside screen/ListOfRequestDocx';
import ResidentDetails from './Resident Information and CM/RICM inside screen/ResidentDetails';
import SubScreen2 from './Resident Information and CM/ServiceRecord';
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LogInScreen';
import RegisterScreen from './Screen/RegisterScreen';
import SplashScreens from './Screen/SplashScreen';

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
            name="REQUEST DOCUMENT" 
            component={RequestDocument} 
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
        <Stack.Screen 
            name="ConfirmationScreen" 
            component={ConfirmationScreen} 
            options={{
                headerTitle: 'REQUEST DETAILS',
                headerStyle: {
                    backgroundColor: '#710808', // Red background color
                },
                headerTintColor: '#FFFFFF', // Text color in header
                headerTitleStyle: {
                    fontWeight: 'bold', // Style for header title
                },
            }}
        />
        <Stack.Screen 
            name="ListOfRequestDocx" 
            component={ListOfRequestDocx} 
            options={{
                headerTitle: 'List Of Request Documents',
                headerStyle: {
                    backgroundColor: '#710808', // Red background color
                },
                headerTintColor: '#FFFFFF', // Text color in header
                headerTitleStyle: {
                    fontWeight: 'bold', // Style for header title
                },
            }}
        />
    </Stack.Navigator>
);

const RegisterStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
            options={({ navigation }) => ({
                header: () => <HeaderRegister navigation={navigation} title="REGISTER ACCOUNT"/>,
            })}
        />
        <Stack.Screen 
            name="CreateAccount" 
            component={CreateAccount} 
            options={{
                headerTitle: 'REGISTER ACCOUNT',
                headerStyle: {
                    backgroundColor: '#710808', // Red background color
                },
                headerTintColor: '#FFFFFF', // Text color in header
                headerTitleStyle: {
                    fontWeight: 'bold', // Style for header title
                },
            }}
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

const RDRStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="RESIDENT DOCUMENT REQUEST" 
            component={ResidentDocumentRequest} 
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

const ResidentRecordsStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="RESIDENT RECORDS" 
            component={ResidentRecords} 
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

const RARStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="RESIDENT ACCOUNT REQUEST" 
            component={ResidentAccountRequest} 
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


const RRPStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="RESIDENT REGISTRATION" 
            component={ResidentRegistrationandProfiling} 
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
        <Stack.Screen 
            name="AddResidentRegister" 
            component={AddResidentRegister} 
            options={({ navigation }) => ({
                header: () => <HeaderRegister navigation={navigation} title="REGISTER ACCOUNT"/>,
            })}
        />
        <Stack.Screen 
            name="ResidentDetails" 
            component={ResidentDetails} 
            options={{
                headerTitle: 'RESIDENT DETAILS',
                headerStyle: {
                    backgroundColor: '#710808', // Red background color
                },
                headerTintColor: '#FFFFFF', // Text color in header
                headerTitleStyle: {
                    fontWeight: 'bold', // Style for header title
                },
            }}
        />
    </Stack.Navigator>
);

const CensusDataStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="CENSUS DATA" 
            component={SubScreen4} 
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

const ReportsStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="REPORTS" 
            component={Reports} 
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
        <Stack.Screen 
            name="EditReportScreen" 
            component={EditReportScreen} 
            options={{
                headerTitle: 'REPORTS',
                headerStyle: {
                    backgroundColor: '#710808', // Red background color
                },
                headerTintColor: '#FFFFFF', // Text color in header
                headerTitleStyle: {
                    fontWeight: 'bold', // Style for header title
                },
            }}
        />
        <Stack.Screen 
            name="ViewReportScreen" 
            component={ViewReportScreen} 
            options={{
                headerTitle: 'REPORTS',
                headerStyle: {
                    backgroundColor: '#710808', // Red background color
                },
                headerTintColor: '#FFFFFF', // Text color in header
                headerTitleStyle: {
                    fontWeight: 'bold', // Style for header title
                },
            }}
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
                name="ResidentDocumentRequest"
                component={RDRStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ResidentRecords"
                component={ResidentRecordsStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="ResidentAccountRequest"
                component={RARStack}
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
                name="Reports"
                component={ReportsStack}
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
                <Stack.Screen
                    name="Register"
                    component={RegisterStack}
                    options={{
                        headerShown: false,
                    // No drawerLabel option means the label will not be shown
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
