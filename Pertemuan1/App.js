import React, { useState, useEffect} from "react";
import {View, Text, StatusBar, Image } from 'react-native';

export default function App () {
  return (
  <View style={{flex: 1}}>
    <StatusBar barStyle={'light-content'} backgroundColor='##212121'> </StatusBar>
    <View style={{alignItems: 'center', backgroundColor: '#white'}}>
      <Image source={{uri: 'https://avatarfiles.alphacoders.com/120/120464.png'}}
     style={{width: 100, height: 100, borderRadius: 100 / 2, marginTop:50}} />
      <Text style={{marginTop: 15, fontSize: 22, fontWeight: 'bold', padding: 10, color: 'black'}}>MUHAMAD SUBHAN RIZKI AFIAT</Text>
  
      <View style={{flex:1, flexDirection: "row", justifyContent:'space-around', alignItems:'center'}}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' }}  style={{
        width:40, height: 40, marginRight:10,
      }} />

        <Image source={{uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}} style={{
          width:40, height:40,}} />

     </View>

     </View>
    </View>
  );
};
