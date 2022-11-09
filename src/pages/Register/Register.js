
import { View, Text, StyleSheet, TextInput, TouchableOpacity,  } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign';

const Register = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Icon name="doubleleft" size={30} color="white" style={styles.icon} onPress={ ()=> navigation.navigate('Login')}/>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}> 
            <Text style={styles.message}>Registre-se nesse mundo mágico!</Text>
        </Animatable.View> 

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput 
            placeholder='Digite seu email'
            style={styles.input}
            />
            <Text style={styles.title}>Nome</Text>
            <TextInput 
            placeholder='Digite seu apelido'
            style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput 
            placeholder='Senha'
            style={styles.input}
            />
            <Text style={styles.title}>Senha</Text>
            <TextInput 
            placeholder='Confirme sua senha'
            style={styles.input}
            />
            {/* TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques. Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade. */}
            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login')}>
                <Text style={styles.buttonText} >Registrar</Text>
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
        marginTop: "5%",
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
        marginTop: 15,
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

export default Register