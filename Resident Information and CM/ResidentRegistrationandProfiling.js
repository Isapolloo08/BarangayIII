import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ResidentRegistrationandProfiling = () => {
  const navigation = useNavigation();

  const [residentsData, setResidentsData] = useState([
    { id: 1, name: 'John Doe', age: 30, address: '123 Main St', sex: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, address: '456 Elm St', sex: 'Female' },
  ]);

  const headers = ['Name', 'Age', 'Address', 'Sex'];

  const [searchQuery, setSearchQuery] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filterBySex, setFilterBySex] = useState(null);

  const navigateToDetails = (resident) => {
    navigation.navigate('ResidentDetails', { resident });
  };

  const handleSearch = (text) => {
    setSearchQuery(text.toLowerCase());
  };

  const applyFilters = (resident) => {
    if (searchQuery && !resident.name.toLowerCase().includes(searchQuery)) {
      return false;
    }
    if (filterBySex && resident.sex !== filterBySex) {
      return false;
    }
    return true;
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const setSexFilter = (sex) => {
    setFilterBySex(sex);
    toggleFilterModal();
  };

  const clearFilters = () => {
    setFilterBySex(null);
    setSearchQuery('');
    toggleFilterModal();
  };

  const filteredResidents = residentsData.filter(applyFilters);

  // Function to add a new resident to the list
  const addNewResident = (newResident) => {
    setResidentsData([...residentsData, newResident]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search residents..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter By:</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleFilterModal}>
          <Text style={styles.dropdownButtonText}>{filterBySex || 'All'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.box}>
        <View style={styles.tableHeader}>
          {headers.map((header, index) => (
            <Text key={index} style={[styles.headerCell, index === headers.length - 1 && { flex: 2 }]}>
              {header}
            </Text>
          ))}
        </View>
        {filteredResidents.map((item, index) => (
          <TouchableOpacity key={index} style={styles.residentRow} onPress={() => navigateToDetails(item)}>
            <Text style={[styles.cell, { borderRightWidth: 1, borderRightColor: '#ccc' }]}>{item.name}</Text>
            <Text style={[styles.cell, { borderRightWidth: 1, borderRightColor: '#ccc' }]}>{item.age}</Text>
            <Text style={[styles.cell, { borderRightWidth: 1, borderRightColor: '#ccc' }]}>{item.address}</Text>
            <Text style={styles.cell}>{item.sex}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddResidentRegister', { addNewResident })}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={filterModalVisible} onRequestClose={toggleFilterModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalItem} onPress={() => setSexFilter('Male')}>
              <Text style={styles.modalText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => setSexFilter('Female')}>
              <Text style={styles.modalText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={clearFilters}>
              <Text style={styles.modalText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={toggleFilterModal}>
              <Text style={styles.modalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  filterLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  dropdownButton: {
    height: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dropdownButtonText: {
    fontSize: 14,
    color: '#fff',
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  residentRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  addText: {
    fontSize: 24,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ResidentRegistrationandProfiling;
