import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState } from 'react'

import Header from '../../components/Header'
import Task from '../../components/Task'

import AddTask from '../AddTask'

const TaskList = () => {
  const [isShowingCheckedTasks, setIsShowingCheckedTasks] = useState(true)
  const [modalToggle, setModalToggle] = useState(true)
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
    </>
  )
}

export default TaskList

const styles = StyleSheet.create({})