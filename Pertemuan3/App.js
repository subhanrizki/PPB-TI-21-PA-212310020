import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriends from './components/Friends/MyFriends';
import { ScrollView } from 'react-native';

const ExpScrollView= ({Users}) => {
  Return (
    <ScrollView>
      {Users.map((v, index)=>(
        <UserItem item={v} key={index} />
      )
    </ScrollView>
  )
}