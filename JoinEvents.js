import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const notificationsData = [
  { id: '1', title: 'System Update', description: 'A system update is scheduled for tonight.' },
  { id: '2', title: 'Meeting Reminder', description: 'Don\'t forget the meeting at 10 AM tomorrow.' },
  { id: '3', title: 'New Message', description: 'You have received a new message.' },
  // Add more notifications as needed
];

const JoinEvents = () => {
  const [joinedNotifications, setJoinedNotifications] = useState({});

  const handleJoin = (id) => {
    setJoinedNotifications((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => handleJoin(item.id)}
      >
        <Text style={styles.buttonText}>Join Notification</Text>
      </TouchableOpacity>
      {joinedNotifications[item.id] && (
        <TouchableOpacity style={styles.addToCalendarButton}>
          <Text style={styles.buttonText}>Add to calendar</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  joinButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  addToCalendarButton: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default JoinEvents;
