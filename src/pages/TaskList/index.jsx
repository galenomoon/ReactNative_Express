import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState } from 'react'

import Header from '../../components/Header'
import Task from '../../components/Task'

const TaskList = () => {
  return (
    <View>
      <Header />
      <Task description={"Compor"} doneAt={new Date()} estimateAt={new Date()} />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({})