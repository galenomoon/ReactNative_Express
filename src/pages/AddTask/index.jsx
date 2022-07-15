import { StyleSheet, Text, View, Modal, Alert, TouchableOpacity as TO, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker'

const AddTask = ({ modalToggle, setModalToggle }) => {
  const [newDescription, setNewDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [toggleDatePicker, setToggleDatePicker] = useState(true)

  const save = (description) => Alert.alert(description.description)

  const cancel = () => setModalToggle(!modalToggle)

  const buttons = [{ label: 'Save', fn: save }, { label: 'Cancel', fn: cancel }]

  const onCloseModal = () => setNewDescription('')

  const getDatePicker = () => {

    const dateString = () => moment(date).format('ddd, D [de] MMMM [de] YYYY')

    return (
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <TO onPress={() => setToggleDatePicker(true)}>
          <Text style={styles.date}>
            {dateString()}
          </Text>
        </TO>
      </View>)
  }

  const datePicker = () => toggleDatePicker &&
    <DateTimePicker
      value={date}
      onChange={(_, date) => [setDate(date), setToggleDatePicker(false)]}
      mode='date'
    />

  useEffect(() => {
    onCloseModal()
  }, [modalToggle])

  return (
    <Modal transparent visible={modalToggle} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.modal.header}>
            <Text style={styles.modal.title}>New Task</Text>
            <TO onPress={() => cancel()}>
              <Icon name='close' size={30} color='#FFF' style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 1 }} />
            </TO>
          </View>
          <View style={styles.modal.body}>
            <TextInput
              placeholder='Type your task title'
              style={styles.input}
              value={newDescription}
              onChangeText={(text) => setNewDescription(text)}
            />
          </View>
          {datePicker()}
          {getDatePicker()}
          <View style={styles.modal.footer}>
            <View style={styles.modal.footer.box}>
              {buttons.map((btn, idx) => <TO onPress={() => btn.fn({ description: newDescription })} key={idx}><Text style={styles.modal.redText}>{btn.label}</Text></TO>)}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AddTask

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: "95%",
    height: "30%",
    overflow: 'hidden',
    header: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#a8033d',
      borderBottomWidth: 0.2,
      justifyContent: 'space-between',
    },
    body: {
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    footer: {
      height: 50,
      backgroundColor: '#fff',
      borderTopWidth: 0.2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      box: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-evenly'
      }
    },
    title: {
      fontSize: 25,
      color: '#FFF'
    },
    redText: {
      fontSize: 17,
      color: '#aF033d',
      fontWeight: 'bold'
    }
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#aF033d',
    width: '90%',
    height: 60,
  },
  date: {
    fontSize: 25
  }
})