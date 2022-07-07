import { StyleSheet, Text, View, TouchableOpacity as TO } from 'react-native'
import React, { useState } from 'react'

//styles
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import 'moment/locale/pt-br'


const Task = ({ description, estimateAt, doneAt }) => {
  const date = moment(isDone ? estimateAt : doneAt).locale('pt-br').format('ddd, D [de] MMMM')
  const [isDone, setIsDone] = useState(false)
  
  return (
    <TO style={styles.container} onPress={() => setIsDone(!isDone)}>
      <Icon name={`checkbox-${isDone ? 'marked' : 'blank'}-circle`} size={30} />
      <View style={{ width: 340 }}>
        <Text style={[styles.title, isDone && styles.doneTask]}>{description}</Text>
        <Text style={[{ fontSize: 12 }, isDone && styles.doneTask]}>{date}</Text>
      </View>
    </TO>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  doneTask: { textDecorationLine: 'line-through', color: '#aaa' }
})