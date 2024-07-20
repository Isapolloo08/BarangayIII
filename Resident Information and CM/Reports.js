import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Reports = ({ navigation }) => {
  const [selectedReport, setSelectedReport] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Select Reports:</Text>
        <Picker
          selectedValue={selectedReport}
          onValueChange={(itemValue) => setSelectedReport(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Barangay Clearance" value="Barangay Clearance" />
          <Picker.Item label="Certificate of Indigency" value="Certificate of Indigency" />
          <Picker.Item label="Barangay ID" value="Barangay ID" />
          <Picker.Item label="Business Permit" value="Business Permit" />
          <Picker.Item label="Barangay Certificate" value="Barangay Certificate" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View"
          onPress={() => {
            if (selectedReport) {
              navigation.navigate('ViewReportScreen', { report: selectedReport });
            } else {
              alert('Please select a report');
            }
          }}
        />
        <Button
          title="Edit"
          onPress={() => {
            if (selectedReport) {
              navigation.navigate('EditReportScreen', { report: selectedReport });
            } else {
              alert('Please select a report');
            }
          }}
        />
      </View>
    </View>
  );
};

const initialReportData = {
  "Barangay Clearance": {
    font: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    content: 'Resident Name: Juan Dela Cruz\nAddress: 123 Barangay St.\nIssued On: July 1, 2024'
  },
  "Certificate of Indigency": {
    font: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    content: 'Resident Name: Maria Clara\nAddress: 456 Barangay Ave.\nIndigency Status: Verified\nIssued On: July 1, 2024'
  },
  "Barangay ID": {
    font: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    content: 'Resident Name: Jose Rizal\nID Number: 78910\nAddress: 789 Barangay Blvd.\nIssued On: July 1, 2024'
  },
  "Business Permit": {
    font: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    content: 'Business Name: Sari-Sari Store\nOwner: Andres Bonifacio\nAddress: 101 Barangay Corner\nPermit Validity: July 1, 2024 - June 30, 2025'
  },
  "Barangay Certificate": {
    font: 'Arial',
    fontSize: 14,
    fontStyle: 'normal',
    content: 'Resident Name: Emilio Aguinaldo\nCertificate Type: Residency\nAddress: 202 Barangay Drive\nIssued On: July 1, 2024'
  }
};

const ViewReportScreen = ({ route }) => {
  const { report } = route.params;
  const [reportData, setReportData] = useState(initialReportData);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>View Report: {report}</Text>
      <View style={styles.reportBox}>
        <Text style={[styles.reportTitle, { fontFamily: reportData[report].font, fontSize: reportData[report].fontSize, fontStyle: reportData[report].fontStyle }]}>{report}</Text>
        <Text style={{ fontFamily: reportData[report].font, fontSize: reportData[report].fontSize, fontStyle: reportData[report].fontStyle }}>
          {reportData[report].content}
        </Text>
      </View>
    </ScrollView>
  );
};

const EditReportScreen = ({ route, navigation }) => {
  const { report } = route.params;
  const [reportData, setReportData] = useState(initialReportData);
  const [font, setFont] = useState(reportData[report].font);
  const [fontSize, setFontSize] = useState(reportData[report].fontSize);
  const [fontStyle, setFontStyle] = useState(reportData[report].fontStyle);
  const [content, setContent] = useState(reportData[report].content);

  const showCancelAlert = () => {
    Alert.alert(
      "Are you sure you want to cancel?",
      "Any unsaved changes will be lost.",
      [
        {
          text: "No",
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.goBack() }
      ]
    );
  };

  const showSaveAlert = () => {
    Alert.alert(
      "Your changes have been saved successfully.",
      "",
      [{ text: "Proceed", onPress: () => {
          const newReportData = {
            ...reportData,
            [report]: { font, fontSize, fontStyle, content }
          };
          setReportData(newReportData);
          navigation.navigate('ViewReportScreen', { report });
        }
      }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit Report: {report}</Text>
      <View style={styles.editBox}>
        {/* Options to change font, text size, style, and content */}
        <Text>Font:</Text>
        <Picker selectedValue={font} onValueChange={(itemValue) => setFont(itemValue)}>
          <Picker.Item label="Arial" value="Arial" />
          <Picker.Item label="Times New Roman" value="Times New Roman" />
          <Picker.Item label="Courier New" value="Courier New" />
        </Picker>
        <Text>Font Size:</Text>
        <Picker selectedValue={fontSize} onValueChange={(itemValue) => setFontSize(itemValue)}>
          <Picker.Item label="14" value={14} />
          <Picker.Item label="16" value={16} />
          <Picker.Item label="18" value={18} />
        </Picker>
        <Text>Font Style:</Text>
        <Picker selectedValue={fontStyle} onValueChange={(itemValue) => setFontStyle(itemValue)}>
          <Picker.Item label="Normal" value="normal" />
          <Picker.Item label="Italic" value="italic" />
          <Picker.Item label="Bold" value="bold" />
        </Picker>
        <Text>Content:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setContent(text)}
          value={content}
        />
      </View>
      <Text style={[styles.preview, { fontFamily: font, fontSize: fontSize, fontStyle: fontStyle }]}>
        {content || 'Preview of the report content here'}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={showCancelAlert} />
        <Button title="Save" onPress={showSaveAlert} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editBox: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  preview: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  reportBox: {
    backgroundColor: 'lightyellow',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Reports;
export { ViewReportScreen, EditReportScreen };
