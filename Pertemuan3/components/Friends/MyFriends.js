import { SafeAreaView, StyleSheet, View } from 'react-native-web';
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';

export class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={StyleSheet.container}>
                <StatusBar hidden={false} style="light" />
                <View style={style.header}></View>
                <View style={Styles.body}></View>
            </SafeAreaView>       
        )
    }
}

export default MyFriends;

const styles = StyleSheet.create ({
    container: { flex: 1, backgroundColor: "black"},
    header: {flex:1, justifyContent:"center", paddingHorizontal:10, backgroundColor: "Orange"},
    body: {flex:10, backgroundColor:"green"}


 })