import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const EventDetail = ({ route }) => {
  const navigation = useNavigation();
  const { event } = route?.params || {}; // Use optional chaining and default value to handle undefined route.params

  // Check if event is defined to prevent accessing undefined properties
  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Error: Event details not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#710808" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>{event.title}</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/400x200.png?text=Event+Image' }}
            style={styles.image}
          />
          <Text style={styles.description}>{event.description}</Text>
          <Text style={styles.detailText}>
            <Text style={styles.label}>When: </Text>
            {moment(event.date).format('MMMM D, YYYY')}, at {event.time}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.label}>Where: </Text>
            {event.location}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.label}>Who's Eligible: </Text>
            {event.eligible}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.label}>Registration: </Text>
            {event.registration}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.label}>Additional Information: </Text>
            {event.additionalInfo}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingTop: 80, // Adjust padding to accommodate top button
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    color: '#710808',
    fontWeight: 'bold',
  },
});

export default EventDetail;
