import { StyleSheet, Text, View, TouchableOpacity as TO } from 'react-native'


import moment from 'moment'
import 'moment/locale/pt-br'

import IoniconsIcon from 'react-native-vector-icons/Ionicons'

const Header = ({isShowingCheckedTasks, setIsShowingCheckedTasks }) => {
  const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

  return (
    <View style={styles.header}>
      <View style={styles.eye}>
        <TO onPress={() => setIsShowingCheckedTasks(!isShowingCheckedTasks)}>
          <IoniconsIcon name={`eye${isShowingCheckedTasks ? '-off' : ''}`} color={"#FFF"} size={30} />
        </TO>
      </View>
      <View style={{ padding: 10 }}>
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
  title: {
    fontSize: 70,
    color: '#fff'
  },
  today: {
    fontSize: 25,
    color: '#fff'
  },
  eye:{
    paddingHorizontal:20,
    alignItems: 'flex-end',
  }
})