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
import CDSM3 from './CDSM/Resident/ProgramSchedule';
import CDSM4 from './CDSM/ResourceManagement';
import CDSM5 from './CDSM/SecretaryBeneficiaryManagement/BeneficiaryRequests';
import CDSM6 from './CDSM/Notification';
import FMASSUB1 from './FMAS/BudgetDashboard';
import FMASSUB2 from './FMAS/AddBudget';
import FMASSUB3 from './FMAS/EditBudget';
import FMASSUB4 from './FMAS/BudgetReport';
import FMASSUB5 from './FMAS/RET_TransactionDashboard';
import FMASSUB6 from './FMAS/RET_AddTranction';
import FMASSUB7 from './FMAS/RET_EditTransaction';
import FMASSUB8 from './FMAS/RET_TransactionReport';
import FMASSUB9 from './FMAS/PM_PayrollTable';
import FMASSUB10 from './FMAS/PM_AddPayroll';
import FMASSUB11 from './FMAS/PM_EditPayroll';
import FMASSUB12 from './FMAS/PM_PayrollReport';
import FMASSUB13 from './FMAS/FM_FinancialTable';
import FMASSUB14 from './FMAS/FM_FinancialReport';
import FMASSUB15 from './FMAS/AM_AuditTable';
import FMASSUB16 from './FMAS/AM_AuditReport';
import CDSMSUB1 from './CDSM/PPS_Calendera';
import CDSMSUB2 from './CDSM/PPS_ProposedProgram';
import CDSMSUB3 from './CDSM/PPS_ProgramSchedule';
import CDSMSUB4 from './CDSM/PPS_ApprovedProgram'
import { UserRoleProvider } from './context/UserRoleContext'; 
import EventDetail from './CDSM/Resident/EventDetail';
import Notification from './CDSM/Resident/ResidentNotification';
import FinalNotif from './CDSM/Resident/FinalNotif';
import FirstNotif from './CDSM/Resident/FirstNotif';
import SecondNotif from './CDSM/Resident/SecondNotif';
import BeneficiaryRequests from './CDSM/SecretaryBeneficiaryManagement/BeneficiaryRequests';
import DetailedView from './CDSM/SecretaryBeneficiaryManagement/DetailedView';
import AddResidentRegister from './Resident Information and CM/RICM inside screen/AddResidentRegister';
import ConfirmationScreen from './Resident Information and CM/RICM inside screen/ConfirmationScreen';
import CreateAccount from './Resident Information and CM/RICM inside screen/CreateAccount';
import HeaderRegister from './Resident Information and CM/RICM inside screen/HeaderRegister';
import ListOfRequestDocx from './Resident Information and CM/RICM inside screen/ListOfRequestDocx';
import ResidentDetails from './Resident Information and CM/RICM inside screen/ResidentDetails';
import RegisterScreen from './Screen/RegisterScreen';
import Reports, { EditReportScreen, ViewReportScreen } from './Resident Information and CM/Reports';
import listprogram from './FMAS/programlist';
import Addprogram from './FMAS/programadd';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ProgramAdd = () => (
    <Stack.Navigator>
    <Stack.Screen 
        name="Home_Home" 
        component={Addprogram} 
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


const Programlist = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home_Home" 
            component={listprogram} 
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

const ProgramStack = () => (
    <Stack.Navigator
      initialRouteName="ProgramSchedule"
      screenOptions={{
        headerStyle: { backgroundColor: '#710808' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="ProgramSchedule"
        component={ProgramSchedule}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
  
  const NotificationStack = () => (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{
        headerStyle: { backgroundColor: '#710808' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinalNotif"
        component={FinalNotif}
        options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="FirstNotif"
        component={FirstNotif}
        options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="SecondNotif"
        component={SecondNotif}
        options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
  
  const BeneficiaryStack = () => (
    <Stack.Navigator
      initialRouteName="BeneficiaryManagement"
      screenOptions={{
        headerStyle: { backgroundColor: '#710808' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="BeneficiaryRequests"
        component={BeneficiaryRequests}
        options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
      name="DetailedView"
        component={DetailedView}
        options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} />,
        })}
      />

    </Stack.Navigator>
  );

  const RegisterStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="RegisterScreen" 
            component={RegisterScreen} 
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

const BDStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Budget Dashboard" 
            component={FMASSUB1} 
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

const ADStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Add Budget" 
            component={FMASSUB2} 
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

const EBStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Edit Budget" 
            component={FMASSUB3} 
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

const BRStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Budget Report" 
            component={FMASSUB4} 
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
            component={NotifStack} 
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

const TDStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Transaction Dashboard" 
            component={FMASSUB5} 
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

const ATStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Add Transaction" 
            component={FMASSUB6} 
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

const ETStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Edit Transaction" 
            component={FMASSUB7} 
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

const TRStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Transaction Report" 
            component={FMASSUB8} 
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

const PTStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Payroll Table" 
            component={FMASSUB9} 
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

const APStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Add Payroll" 
            component={FMASSUB10} 
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

const EPStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Edit Payroll" 
            component={FMASSUB11} 
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

const PRStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Payroll Report" 
            component={FMASSUB12} 
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

const FTStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Financial Table" 
            component={FMASSUB13} 
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

const FRStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Financial Report" 
            component={FMASSUB14} 
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

const ATTStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Audit Table" 
            component={FMASSUB15} 
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

const ARStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Audit Report" 
            component={FMASSUB16} 
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

const CalendarStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="PPS_Calendar" 
            component={CDSMSUB1} 
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

const PPStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="ProposedProgram" 
            component={CDSMSUB2} 
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

const PSStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Program Schedule" 
            component={CDSMSUB3} 
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

const PRRStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="ApprovedProgram" 
            component={CDSMSUB4} 
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
                name="Home1"
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
                    }}
                />
                <Drawer.Screen
                    name="BudgetPlanningandMonitoring"
                    component={BPMStack}
                    options={({ navigation }) => ({
                        header: () => <Header_subscreen navigation={navigation} />,
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
                component={BeneficiaryStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
            <Drawer.Screen
                name="Notification"
                component={NotificationStack}
                options={{ header: () => <Header_subscreen title={'Welcome'} /> }}
             />
              <Drawer.Screen
                name="BudgetDashboard"
                component={BDStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="AddBudget"
                component={ADStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="EditBudget"
                component={EBStack}
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
                name="BudgetReport"
                component={BRStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="TransactionDashboard"
                component={TDStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="AddTransaction"
                component={ATStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="EditTransaction"
                component={ETStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="TransactionReport"
                component={TRStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                <Drawer.Screen
                name="PayrollTable"
                component={PTStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="AddPayroll"
                component={APStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="EditPayroll"
                component={EPStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="PayrollReport"
                component={PRStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                     <Drawer.Screen
                name="FinancialTable"
                component={FTStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="AuditTable"
                component={ATTStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                    <Drawer.Screen
                name="AuditReport"
                component={ARStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="FinancialReport"
                component={FRStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                            <Drawer.Screen
                name="Calendar"
                component={CalendarStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
              <Drawer.Screen
                name="Proposed Program"
                component={PPStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                    <Drawer.Screen
                name="Program Schedule"
                component={PSStack}
                options={{
                    headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                <Drawer.Screen
                name="Approved Program"
                component={PRRStack}
                options={{
                headerShown: false,
                    // No drawerLabel option means the label will not be shown
                }}
            />
                <Drawer.Screen
                name="programlist"
                component={Programlist}
                options={{ headerShown: false }}
            />
                <Drawer.Screen
                name="programadd"
                component={ProgramAdd}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <UserRoleProvider>
                <Stack.Navigator initialRouteName="Splash">
                    <Stack.Screen
                    name="Splash"
                    component={SplashScreens}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen
                    name="LogIn"
                    component={LoginScreen}
                    options={{ header: () => <CustomHeader title={'Welcome'} /> }}
                    />
                    <Stack.Screen
                    name="Homes"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                    />
                      <Stack.Screen
                    name="Event"
                    component={ProgramStack}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen
                    name="EventDetail"
                    component={EventDetail}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen
                    name="Notification"
                    component={NotificationStack}
                    options={{ headerShown: false }}
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
          </UserRoleProvider>
        </NavigationContainer>

    );
  };

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