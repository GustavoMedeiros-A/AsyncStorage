

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const navigation = useNavigation()

    const [name, setName] = useState('')

    useEffect(() => {
      getData()
    }, []);

    const getData = () => {
      try {
        AsyncStorage.getItem('UserName')
        .then(value => {
          if(value != null) {
            setName(value)
          }
        })
      } catch (error){
        console.log(error)
      }
    }

    const updateData = async () => {
      if(name.length == 0) {
          Alert.alert("Atenção! Digite seu nome antes de logar")
      } else {
          try {
              await AsyncStorage.setItem('UserName', name)
              Alert.alert('Seus dados foram atualizados!')
          } catch(error) {
              console.log(error);
          }

      }
  }

  const removeData = async () => {
        try {
            await AsyncStorage.removeItem('UserName')
            navigation.navigate('Login')
        } catch(error) {
            console.log(error);
        }

    }

  return (
  <View style={styles.container}>
    <Icon name="doubleleft" size={30} color="white" style={styles.icon} onPress={ ()=> navigation.navigate('Welcome')}/>
    <View style={styles.containerStart}><Text style={styles.textStart}>Bem vindo a Valinor!</Text></View>
    
          <View style={styles.containerLogo}>
              <Animatable.Image 
              animation="flipInY"
              source={require('../../assets/valinor.png')}
              style={{width: '100%', height: '70%'}}
              risizeMode='contain'
              />
          </View>
          <Animatable.View delay={600} animation="fadeInUp"style={styles.containerChange}>
            <View style={styles.containerFull}>
            <View style={styles.containerName}><Text style={styles.textName}>Welcome {name}</Text></View>
            <View style={styles.containerInput}>
              <TextInput 
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
              >
              </TextInput>
              </View>
              <View style={styles.containerButtons}>
              <TouchableOpacity style={styles.button} 
              title="Update"
              color='black'
              onPress={updateData}
              >
                <Text style={styles.buttonText} >Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} 
              title="Update"
              color='black'
              onPress={removeData}
              >
                <Text style={styles.buttonText} >Remove</Text>
            </TouchableOpacity>
            </View>
            </View>
            
          </Animatable.View>
          
          
         
    </View>
    

  )
}

const styles = StyleSheet.create({
  container:{
      flex:2,
      backgroundColor:"#rgb(32,33,45);",

  },
  containerLogo:{
      flex:1,
      backgroundColor:"#rgb(32,33,45);",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      height: "30%",
      marginTop: "8%",
  },
  containerStart: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  textStart: {
    fontSize:35,
    color: "white",
    fontWeight: 'bold',
  },
  textName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  containerName: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerChange:{
    flex:2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    alignItems: "center",
},
containerFull: {
  flex: 1,
  width: '100%',
  alignItems: 'center',
  
},
  icon:{
    marginTop: 10,
    marginLeft: 10,
},
containerInput: {
  marginBottom: "10%",
  width: '70%',
  height: 30,
},
input: {
  borderBottomWidth: 1,
  fontSize: 16,
  borderColor: 'black'
},
button: {
  backgroundColor: "#rgb(32,33,45);",
  width: '60%',
  borderRadius: 0,
  paddingVertical: 0,
  marginBottom: '2%',
  alignItems: 'center'
},
buttonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: 'bold',
},
containerButtons: {
  marginBottom: '5%',
  width: '100%', 
  alignItems: 'center'
}
})

export default Home