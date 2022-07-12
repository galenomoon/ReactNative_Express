import { StyleSheet, Text, View, Modal, Alert, TouchableOpacity as TO, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AddTask = ({ modalToggle, setModalToggle }) => {
  const [newDescription, setNewDescription] = useState('')

  const save = (description) => Alert.alert(description.description)

  const cancel = () => { }

  const buttons = [{ label: 'Save', fn: save }, { label: 'Cancel', fn: cancel }]
  const onCloseModal = () => {
    return setModalToggle(false)
  }

  return (
    <Modal transparent visible={true} onRequestClose={() => onCloseModal()} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.modal.header}>
            <Text style={styles.modal.title}>New Task</Text>
            <TO onPress={() => onCloseModal()}>
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
  }
})