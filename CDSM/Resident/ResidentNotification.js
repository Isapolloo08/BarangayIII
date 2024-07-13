import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const notificationsData = [
    { 
      id: '1', 
      eventName: 'Financial Assistance for College Students', 
      dateNotified: '2024-07-10T10:00:00Z', 
      imageUrl: 'https://via.placeholder.com/50', 
      type: "first",
      description: "Dear Residents of Barangay III, We are pleased to announce a new Financial Assistance Program aimed at supporting students in our community. This program provides financial aid to assist with educational expenses."
    },
    { 
      id: '2', 
      eventName: 'Event 2', 
      dateNotified: '2024-07-29T14:30:00Z', 
      imageUrl: 'https://via.placeholder.com/50',
      description: "Dear Residents of Barangay III, We are pleased to announce a new Financial Assistance Program aimed at supporting students in our community. This program provides financial aid to assist with educational expenses.",
      type: "final"
    },
    { 
      id: '3', 
      eventName: 'Application Status Update: Pending Review', 
      dateNotified: '2024-07-08T08:45:00Z', 
      imageUrl: 'https://via.placeholder.com/50', 
      description: "Dear Residents of Barangay III, We are pleased to announce a new Financial Assistance Program aimed at supporting students in our community. This program provides financial aid to assist with educational expenses.",
      type: "second"
    },
    { 
      id: '4', 
      eventName: 'Event 0', 
      dateNotified: '2024-01-01T08:45:00Z', 
      imageUrl: 'https://via.placeholder.com/50', 
      description: "Dear Residents of Barangay III, We are pleased to announce a new Financial Assistance Program aimed at supporting students in our community. This program provides financial aid to assist with educational expenses.",
      type: "first"
    },
    // Add more notifications as needed
  ];
  

const Notification = () => {
  const [selectedFilter, setSelectedFilter] = useState('latest'); // Default to 'latest'
  const navigation = useNavigation();

  const renderNotification = ({ item }) => {
    const formattedDate = formatNotificationDate(item.dateNotified);
    return (
      <TouchableOpacity
        style={styles.notification}
        onPress={() => handleNotificationPress(item)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.notificationImage} />
        <View style={styles.notificationText}>
          <Text style={styles.eventName}>{item.eventName}</Text>
          <Text style={styles.dateNotified}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const formatNotificationDate = (isoDate) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    try {
      const date = new Date(isoDate);
      return date.toLocaleDateString('en-US', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'June 23 2024 at 10:00 am'; // Default format if date parsing fails
    }
  };

  const handleNotificationPress = (item) => {
    navigation.navigate(item.type === 'first' ? 'FirstNotif' : item.type === 'second' ? 'SecondNotif' : 'FinalNotif', { notification: item });
  };

  // Function to filter and sort notifications based on selected filter
  const filterAndSortNotifications = () => {
    let filteredNotifications = [...notificationsData];
    
    switch (selectedFilter) {
      case 'latest':
        // Sort by dateNotified in descending order (latest first)
        filteredNotifications.sort((a, b) => new Date(b.dateNotified) - new Date(a.dateNotified));
        break;
      case 'this_week':
        // Filter notifications for this week
        filteredNotifications = filteredNotifications.filter(notification =>
          isDateThisWeek(new Date(notification.dateNotified))
        );
        break;
      case 'this_month':
        // Filter notifications for this month
        filteredNotifications = filteredNotifications.filter(notification =>
          isDateThisMonth(new Date(notification.dateNotified))
        );
        break;
      case 'this_year':
        // Filter notifications for this year
        filteredNotifications = filteredNotifications.filter(notification =>
          isDateThisYear(new Date(notification.dateNotified))
        );
        break;
      default:
        // Default to sorting by latest if selectedFilter doesn't match any case
        filteredNotifications.sort((a, b) => new Date(b.dateNotified) - new Date(a.dateNotified));
    }
    
    return filteredNotifications;
  };

  // Helper functions to check if a date is within this week, this month, or this year
  const isDateThisWeek = (date) => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    return date >= firstDayOfWeek;
  };

  const isDateThisMonth = (date) => {
    const today = new Date();
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  const isDateThisYear = (date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by:</Text>
        <Picker
          selectedValue={selectedFilter}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedFilter(itemValue)}
        >
          <Picker.Item label="Latest" value="latest" />
          <Picker.Item label="This Week" value="this_week" />
          <Picker.Item label="This Month" value="this_month" />
          <Picker.Item label="This Year" value="this_year" />
        </Picker>
      </View>
      <FlatList
        data={filterAndSortNotifications()}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text>No new notifications.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 5, // Smaller padding
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  filterLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: 150,
  },
  listContent: {
    paddingVertical: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Rounded image
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#710808', // Font color
  },
  dateNotified: {
    fontSize: 14,
    color: '#710808', // Font color
  },
});

export default Notification;
