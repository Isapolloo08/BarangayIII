import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProgramSchedule = () => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(null);
  const [programs, setPrograms] = useState([
    { id: '1', title: 'Meeting with Team', date: '2024-07-10', location: 'Conference Room', manager: 'John Doe', eligible: 'Team Members', time: '10:00 AM', description: 'Team meeting to discuss project updates.', registration: 'Register at the office.', additionalInfo: 'Bring your project updates.' },
    { id: '2', title: 'Yoga Class', date: '2024-07-12', location: 'Yoga Studio', manager: 'Jane Smith', eligible: 'Everyone', time: '07:00 AM', description: 'Morning yoga session to start the day fresh.', registration: 'No registration required.', additionalInfo: 'Bring your yoga mat.' },
    { id: '3', title: 'Tech Conference', date: '2024-07-15', location: 'Main Hall', manager: 'Alice Brown', eligible: 'Tech Enthusiasts', time: '09:00 AM', description: 'Conference discussing the latest in technology.', registration: 'Register online.', additionalInfo: 'Arrive early to get good seats.' },
  ]);

  const onDateChange = (date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD'));
  };

  const showAllEvents = () => {
    setSelectedDate(null);
  };

  const filteredPrograms = selectedDate
    ? programs.filter(program => program.date === selectedDate)
    : programs;

  const renderProgram = ({ item }) => {
    const formattedDate = moment(item.date).format('MMMM D, YYYY');
    const day = moment(item.date).format('DD');
    const month = moment(item.date).format('MMM');
    return (
      <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { event: item })}>
        <View style={styles.programCard}>
          <View style={styles.leftBox}>
            <View style={styles.dateBox}>
              <Text style={styles.dayText}>{day}</Text>
              <Text style={styles.monthText}>{month}</Text>
            </View>
          </View>
          <View style={styles.middleBox}>
            <Text style={styles.programTitle}>{item.title}</Text>
            <Text style={styles.programDetails}>Date: {formattedDate}</Text>
            <Text style={styles.programDetails}>Location: {item.location}</Text>
            <Text style={styles.programDetails}>Manager: {item.manager}</Text>
            <Text style={styles.programDetails}>Eligible: {item.eligible}</Text>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.detailsButtonText}>See Details</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const customDatesStyles = programs.map(program => ({
    date: moment(program.date).toDate(),
    style: { backgroundColor: '#710808' },
    textStyle: { color: 'white' },
    containerStyle: [],
  }));

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={onDateChange}
          todayBackgroundColor="#00FF00"
          selectedDayColor="#710808"
          selectedDayTextColor="#FFFFFF"
          customDatesStyles={customDatesStyles}
        />
        <View style={styles.cardView}>
          <Text style={styles.headerText}>
            {selectedDate ? moment(selectedDate).format('MMMM D, YYYY') : 'This Month'}
          </Text>
          {selectedDate && (
            <Button title="Show All" onPress={showAllEvents} />
          )}
          <FlatList
            data={filteredPrograms}
            renderItem={renderProgram}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No programs scheduled for this date.</Text>
              </View>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  cardView: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    elevation: 3,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  programCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
  },
  leftBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dateBox: {
    backgroundColor: '#710808',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  monthText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  middleBox: {
    flex: 1,
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  programDetails: {
    fontSize: 14,
    color: '#555',
  },
  rightBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#710808',
  },
  detailsButtonText: {
    color: '#710808',
    fontSize: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProgramSchedule;
