import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Main extends Component {

    buttonGoHome = () => {
        const { navigation } = this.props;

        navigation.navigate('Home')
    }

    buttonGoRegister = () => {
        const { navigation } = this.props;

        navigation.navigate('Register')
    }

    render(){
        return (
            <LinearGradient colors={['#EDCF07', '#D6A504']} style={style.container}>

                <TextInput style={style.email} placeholder="seuemail@exemplo.com" placeholderTextColor="#fff"></TextInput>
                <TextInput secureTextEntry={true} style={style.password} placeholder="********" placeholderTextColor="#fff"></TextInput>

               <TouchableOpacity style={style.buttonHome} onPress={this.buttonGoHome}>
                   <Text style={style.textHome}>Login</Text>
               </TouchableOpacity>

                <Text style={style.textInfo}>Problemas para efetuar o login?</Text>

                <TouchableOpacity style={style.buttonRegister} onPress={this.buttonGoRegister}>
                    <Text style={style.textRegister}>Não tem uma conta? <Text style={style.textCreate}>Criar</Text></Text>
                </TouchableOpacity>

            </LinearGradient>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    email: {
        fontFamily: 'Lato',
        textAlign: 'center',
        fontSize: 12,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#fff',
        width: 300,
        height: 50
    },
    password: {
        fontFamily: 'Lato',
        textAlign: 'center',
        fontSize: 12,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#fff',
        width: 300,
        height: 50
    },
    buttonHome: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: '5%',
        justifyContent: 'center',
        width: 100,
        height: 40,
        padding: 5
    },
    textHome: {
        fontFamily: 'Lato',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    },
    textInfo: {
        fontFamily: 'Lato',
        fontSize: 12,
        color: '#fff',
        marginTop: '5%',
    },
    buttonRegister: {
        position: 'absolute',
        bottom: 20,
    },
    textRegister: {
        fontFamily: 'Lato',
        fontSize: 12,
        color: '#fff',
    },
    textCreate: {
        fontFamily: 'Lato',
        fontWeight: 'bold'
    }
})