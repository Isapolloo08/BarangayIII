import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
const ResidentDocumentRequest = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Di mo ba ako miss?</Text>
  </View>
);
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

});

export default ResidentDocumentRequest;