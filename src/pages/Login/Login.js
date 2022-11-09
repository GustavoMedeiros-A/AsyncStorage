
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
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
              navigation.navigate('Home')
            }
          })
        } catch (error){
          console.log(error)
        }
      }

    const setData = async () => {
        if(name.length == 0) {
            Alert.alert("Atenção! Digite seu nome antes de logar")
        } else {
            try {
                await AsyncStorage.setItem('UserName', name)
                navigation.navigate('Home')
            } catch(error) {
                console.log(error);
            }

        }
    }



  return (
    <View style={styles.container}>
        <Icon name="doubleleft" size={30} color="white" style={styles.icon} onPress={ ()=> navigation.navigate('Welcome')}/>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}> 
            <Text style={styles.message}>Bem-vindo, aventureiro(a)!</Text>
        </Animatable.View> 

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Nome</Text>
            <TextInput 
            placeholder='Digite seu Nome...'
            style={styles.input}
            onChangeText={(value) => setName(value)}
            />

            {/* <Text style={styles.title}>Senha</Text>
            <TextInput 
            placeholder='Sua senha...'
            style={styles.input}
            /> */}
            {/* TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques. Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade. */}
            <TouchableOpacity style={styles.button} 
            // onPress={ () => navigation.navigate('Home')}
            onPress={setData}
            >
                <Text style={styles.buttonText} >Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#rgb(32,33,45);"
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%"
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#fff"
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBotton: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: "#rgb(32,33,45);",
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: "#a1a1a1"
    },
    icon:{
        marginTop: 15,
        marginLeft: 10,
    }
})

export default Login