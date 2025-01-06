import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomDrawer = (props) => {
  const [programPlanningExpanded, setProgramPlanningExpanded] = useState(false);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Community Development</Text>
        <Text style={styles.headerText}>and Services Management</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')}>
        <Text style={{ margin: 16, fontSize: 16, fontWeight: 'bold' }}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setProgramPlanningExpanded(!programPlanningExpanded)}>
        <Text style={{ margin: 16, fontSize: 16, fontWeight: 'bold' }}>Program Planning and Scheduling</Text>
      </TouchableOpacity>
      {programPlanningExpanded && (
        <View style={{ marginLeft: 32 }}>
          <DrawerItem
            label="Calendar"
            onPress={() => props.navigation.navigate('CCalendar')}
          />
          <DrawerItem
            label="Proposed Program"
            onPress={() => props.navigation.navigate('CProposedProgram')}
          />
        </View>
      )}
      <TouchableOpacity onPress={() => props.navigation.navigate('CEvents')}>
        <Text style={{ margin: 16, fontSize: 16, fontWeight: 'bold' }}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('CResources')}>
        <Text style={{ margin: 16, fontSize: 16, fontWeight: 'bold' }}>Resource Management</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('CBeneficiary')}>
        <Text style={{ margin: 16, fontSize: 16, fontWeight: 'bold' }}>Beneficiary Management</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#710808',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
