import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
const Header = ({ }) => {
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
  return (
    <View style={styles.header}>
      <View style={{padding:10}}>
        <Text style={styles.title}>
          Hoje
        </Text>
        <Text style={styles.today}>
          {today}
        </Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#a8033d',
    width: "100%",
    height: 240,
    justifyContent: 'flex-end',
  },
  title:{
    fontSize: 70,
    color: '#fff'
  },
  today: {
    fontSize: 25,
    color: '#fff'
  }
})