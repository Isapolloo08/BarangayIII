import { View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Button, ScrollView, ViewBase, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown'
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const BlotterFrom = () => {
  const [incidentNo, insertNo] = useState(null)
  const [newdate, dateSelected] = useState('MM/DD/YYYY')
  const [newhour, hourSelected] = useState('HH')
  const [newminute, minuteSelected] = useState('MM')
  const [value, setValue] = useState(null)
  const [isChecked, setChecked] = useState(false)
  const [resiInfo, setResiInfo] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputName, setInputName] = useState()
  const [editName, setEditName] = useState()
  const [isRender, setIsRender] = useState(false)

  const [respoInfoArray, setRespoInfoArray] = useState([])

  const onPressItem = (item) => {
    setIsModalVisible(true)
    setInputName(item.RespondentName)
    setEditName(item.id)
  }

  const addNewResPress = () => {
    var resInfo = {
      id: respoInfoArray.length + 1,
      RespondentName: resiInfo
    }

    setRespoInfoArray([...respoInfoArray, resInfo]);
    setResiInfo('')
  }
  
  const handleEditName = (editNames) => {
    const newData = respoInfoArray.map(item => {
      if (item.id == editNames) {
        item.RespondentName = inputName
        return item
      }
      return item
    })
    setRespoInfoArray(newData)
    setIsRender(!isRender)
  }

  const onPressSaveEdit = () => {
    handleEditName(editName)
    setIsModalVisible(false)
  }

  const onPressDelete = () => {
    const newData = respoInfoArray.filter(item => item.id !== editName);
    setRespoInfoArray(newData);
    setIsModalVisible(false);
  }

  const renderItemList = ({item}) =>{
    return(
      <TouchableOpacity
        onPress={() => onPressItem(item)}>
        <View style={{alignItems: 'center', borderWidth: 1, borderColor: 'gray'}}>
          <Text style={{fontSize: 16}}>{item.RespondentName}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const renderItem = item =>{
    return(
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{marginHorizontal: 1, flex: 1, paddingBottom: 15, backgroundColor: '#F2F3F7'}}>
      <ScrollView style={{backgroundColor: '#F2F3F7'}}>
        <View style={styles.caseInfo}>
          <Text style={styles.sectionText}>Incident No. : <Text>{incidentNo}</Text></Text>
          <View style={styles.datetimes}>
            <Text style={styles.secondaryText}>Date:<Text style={styles.required}>*</Text></Text>
            <TouchableOpacity>
              <View style={styles.datetimeContainer}>
                <Text style={{fontSize: 14, color: 'gray', fontStyle: 'italic'}}>{newdate}   </Text>
                <Ionicons name='calendar-outline' style={{color: '#710808'}}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.secondaryText}>Time:<Text style={styles.required}>*</Text></Text>
            <TouchableOpacity>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.timeDesign}>{newhour}</Text>
                <Text>:</Text>
                <Text style={styles.timeDesign}>{newminute}</Text>
                <View style={styles.timeContainer}>
                  <Text>PM</Text>
                </View>
                <Ionicons name='time-outline' size={15} style={styles.iconsStyle}/>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 8}}></Text>
          <Text style={styles.secondaryText}>Place of Incident:<Text style={styles.required}>*</Text></Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderItem={renderItem}
          />
          <Text style={styles.secondaryText}>Type of Incident:<Text style={styles.required}>*</Text></Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderItem={renderItem}
          />
          <Text style={styles.secondaryText}>Description:<Text style={styles.required}>*</Text></Text>
          <TextInput 
            style={styles.inputed}
            placeholder='Description of the case...'
            multiline= {true}
            />
        </View>
        <View style={styles.comInformations}>
          <Text style={styles.sectionText}>Complainant Information:</Text>
          <Text style={styles.secondaryText}>Name of Complainant:<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.informInput}
            placeholder='Name of Complainant'
            multiline= {false}
          />
          <Text style={styles.secondaryText}>Phone Number:<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.informInput}
            placeholder='Phone Number'
            multiline= {false}
          />
          <Text style={styles.secondaryText}>Address:<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.informInput}
            placeholder='Address'
            multiline= {false}
          />
        </View>
        <View style={styles.respoInformation}>
            <View style={{flexDirection: 'row'}}>
              <Checkbox value={isChecked} onValueChange={setChecked} style={{marginRight: 5, transform:[{scale: .8}]}}/>
              <Text style={{fontSize: 16, marginBottom: 5}}>Unidentified Respondent/s:</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.sectionText}>Respondent Information</Text>
              <TouchableOpacity onPress={() => addNewResPress()}>
                <View style={styles.addNew}>
                  <Ionicons name='add-circle-outline' size={22} style={{color: '#fff'}}/>
                  <Text style={{color: '#fff', marginLeft: 5}}>ADD NEW</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.tableContainer}>
              <View style={styles.listContainer}>
                <View style={styles.headers}>
                    <Text style={[styles.headerText, {width: '100%'}]}>Name of Respondent</Text>
                  </View>
              </View>
              <FlatList
                data={respoInfoArray}
                renderItem={renderItemList}
                keyExtractor={itemsss => itemsss.id}
                extraData={isRender}
              />
              <TextInput
                style={styles.inputsNameee}
                value={resiInfo}
                keyboardType='default'
                placeholder='HIII'
                onChangeText={value=>{
                  setResiInfo(value)
                }}
              />
              <Modal
                animationType='fade'
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}>
                <View style={styles.modalView}>
                  <Text>Edit Respondent/s Name:</Text>
                  <TextInput
                    onChangeText={text => setInputName(text)}
                    defaultValue={inputName}
                    editable={true}
                    multiline={false}
                    maxLength={200}
                  />
                  <View>
                    <TouchableOpacity
                      onPress={() => onPressDelete()}>
                      <Text>DELETE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => onPressSaveEdit()}>
                      <Text>SAVE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionText: {
    color:'#710808',
    fontWeight: 'bold',
    fontSize: 20
  },
  required: {
    color: '#710808',
    fontSize: 16
  },
  secondaryText: {
    fontSize: 18,
    fontWeight: 'semibold'
  },
  caseInfo: {
    marginHorizontal: 10,
    backgroundColor: '#F2F3F7'
  },
  datetimeContainer: { 
    borderWidth: 1,
    borderColor: 'CAD3DF',
    borderRadius: 5,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    marginHorizontal: 5
  },
  timeContainer: { 
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  iconsStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 3,
    alignItems: 'center',
    color: '#710808'
  },
  datetimes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeDesign: {
    borderWidth: 1,
    borderColor: 'CAD3DF',
    borderRadius: 5,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    marginHorizontal: 5,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'gray'
  },
  dropdown: {
    margin: 2,
    height: 30,
    backgroundColor: '#FFFFFF',
    borderWidth:1,
    borderBlockColor: '#A8A8A8',
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    marginRight: 5
  },
  informInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: 'gray'
  },
  textItem : {
    flex: 1,
    fontSize: 13,
    marginHorizontal: 8
  },
  placeholderStyle: {
    fontSize: 13,
    color: 'gray'
  },
  selectedTextStyle: {
    fontSize: 13,
    color: 'gray'
  },
  addNew: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#710808',
    paddingHorizontal: 5
  },
  tableContainer: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderRadius: 5
  },
  listContainer: {
    backgroundColor: '#710808',
    borderRadius: 5
  },
  headers: {
    backgroundColor: '#710808',
    borderTopEndRadius: 5,
    borderTopStartRadius: 5
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  },
  inputsNameee:{
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16
  },
  iconStyle: {
      width: 20,
      height: 20,
  },
  inputSearchStyle: {
    height: 20,
    fontSize: 13,
  },
  inputed: {
    width: '100%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#A8A8A8',
    minHeight: 57,
    textAlignVertical: 'top'
  },
  comInformations: {
    borderTopWidth: 1.5,
    marginTop: 13,
    paddingTop: 7,
    paddingHorizontal: 10,
    borderTopWidth: 1.5,
    borderColor: 'gray',
    backgroundColor: '#F2F3F7'
  },
  respoInformation: {
    borderTopWidth: 1.5,
    backgroundColor: '#F2F3F7',
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingTop: 7,
    marginTop: 13
  },
  header: {
    flexDirection: 'row'
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BlotterFrom