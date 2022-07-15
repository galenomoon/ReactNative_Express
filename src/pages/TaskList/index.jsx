import { StyleSheet, FlatList, View, TouchableOpacity as TO } from 'react-native'
import React, { useState } from 'react'

//components
import Header from '../../components/Header'
import Task from '../../components/Task'

//pages
import AddTask from '../AddTask'

// styles
import IoniconsIcon from 'react-native-vector-icons/Ionicons'


const TaskList = () => {
  const [isShowingCheckedTasks, setIsShowingCheckedTasks] = useState(true)
  const [modalToggle, setModalToggle] = useState(false)
  const tasks = [
    { id: 1, description: 'Compor', estimateAt: new Date() },
    { id: 2, description: 'Cantar', estimateAt: new Date() },
    { id: 3, description: 'Comer bolo', estimateAt: new Date() },
  ]

  return (
    <>
      <AddTask modalToggle={modalToggle} setModalToggle={setModalToggle} />
      <View>
        <Header isShowingCheckedTasks={isShowingCheckedTasks} setIsShowingCheckedTasks={setIsShowingCheckedTasks} />
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Task
              task={item}
              description={item.description}
              estimateAt={item.estimateAt}
              doneAt={item.doneAt}
            />
          }
        />
      </View>
      <TO onPress={() => setModalToggle(!modalToggle)} style={styles.btn}>
        <IoniconsIcon name='add' size={40} color='#fff' />
      </TO>
    </>
  )
}

export default TaskList

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: "#a8033d",
    position: 'absolute',
    right: 1,
    bottom: 1,
    margin: 20,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})