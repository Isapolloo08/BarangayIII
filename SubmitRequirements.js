import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RequirementsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REQUIREMENTS</Text>
      <View style={styles.requirementContainer}>
        <Text style={styles.requirementText}>Certificate of Enrollment:</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.buttonText}>UPLOAD FILE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.requirementContainer}>
        <Text style={styles.requirementText}>Certificate of Grades:</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.buttonText}>UPLOAD FILE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.requirementContainer}>
        <Text style={styles.requirementText}>Certificate of Indigency:</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.buttonText}>UPLOAD FILE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.requirementContainer}>
        <Text style={styles.requirementText}>Scanned Copy of Valid ID or School ID:</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.buttonText}>UPLOAD FILE</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B0000',
  },
  requirementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  requirementText: {
    fontSize: 16,
    flex: 1,
  },
  uploadButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#8B0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RequirementsScreen;
