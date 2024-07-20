import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const EditReportScreen = ({ route, navigation }) => {
  const { reportData } = route.params;
  const [reportName, setReportName] = useState(reportData.name);
  // Add other state variables as needed

  const handleSave = () => {
    // Handle save logic here
    console.log('Save report');
    // Navigate back or show a confirmation message
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.reportBox}>
        <Text style={styles.title}>Edit Report</Text>
        <TextInput
          style={styles.input}
          value={reportName}
          onChangeText={setReportName}
          placeholder="Report Name"
        />
        {/* Add other input fields as needed */}
        <Button title="Save" onPress={handleSave} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  reportBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default EditReportScreen;
