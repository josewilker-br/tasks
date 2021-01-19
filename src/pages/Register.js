import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Register extends Component {

    static navigationOptions = {
        title: 'Registre-se'
    }

    buttonGoHome = () => {
        const { navigation } = this.props;

        navigation.navigate('Home')
    }

    buttonGoLogin = () => {
        const { navigation } = this.props;

        navigation.navigate('Main')
    }

    render(){
        return (
            <LinearGradient colors={['#EDCF07', '#D6A504']} style={style.container}>

            <TextInput style={style.name} placeholder="seu nome" placeholdertextColor="#000"></TextInput>
            <TextInput style={style.email} placeholder="seuemail@exemplo.com" placeholderTextColor="#fff"></TextInput>
            <TextInput secureTextEntry={true} style={style.password} placeholder="********" placeholderTextColor="#fff"></TextInput>

           <TouchableOpacity style={style.buttonHome} onPress={this.buttonGoHome}>
               <Text style={style.textHome}>Registrar</Text>
           </TouchableOpacity>

            <TouchableOpacity style={style.buttonLogin} onPress={this.buttonGoLogin}>
                <Text style={style.textLogin}>Voltar para a tela de login</Text>
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
    name: {
        fontFamily: 'Lato',
        textAlign: 'center',
        fontSize: 12,
        borderBottomColor: '#000',
        borderBottomWidth: 300,
        height: 50
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
    buttonLogin: {
        position: 'absolute',
        bottom: 20,
    },
    textLogin: {
        fontFamily: 'Lato',
        fontSize: 12,
        color: '#fff',
    },
})