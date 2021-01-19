import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Home extends Component {
    buttonAdd = () => {
        const { navigation } = this.props;
        
        navigation.navigate('Add')
    };
    static navigationOptions = {
        title: 'Home'
    };

    render () {
        return(
            <View style={style.containerWelcome}>
                <Text style={style.welcome}>Olá, (usuário)</Text>
                <Text style={style.welcome}>Essas são suas tarefas:</Text> 

            <View>
                <Text style={style.task}>Prioritárias</Text>
                <Text style={style.task}>Todas</Text>
            </View>

            <TouchableOpacity style={style.buttonAdd} onPress={this.buttonAdd}>
                <Image style={style.icon} source={require('../../assets/img/add.png')}></Image>
                <Text style={style.add}>Adicionar tarefa</Text>
            </TouchableOpacity>
            </View>
    )
}}

const style = StyleSheet.create({
    containerWelcome: {
        flex: 1,
        margin: '10%'
    },
    welcome: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18
    },
    task: {
        marginTop: '10%',
        marginBottom: '10%',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18
    },
    buttonAdd: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 45,
        height: 45
    },
    add: {
        marginLeft: '5%',
        fontFamily: 'Lato',
        fontSize: 18,
        color: '#000'
    }
})