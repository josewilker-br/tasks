import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class Add extends Component {
    buttonHome = () => {
        const { navigation } = this.props;

        navigation.navigate('Home')
    }
    render() {
        return(
            <View style={style.container}>
                <Text style={style.task}>Nova Tarefa:</Text>
                <View style={style.box}>
                    <TextInput style={style.title} placeholder="Título" placeholderTextColor="#f0f0f0"></TextInput>
                    <TextInput style={style.description} placeholder="Descrição" placeholderTextColor="#f0f0f0"></TextInput>
                    <Text style={style.priority}>Prioridade</Text>
                    <Text style={style.calendar}>Calendário</Text>
                </View>

                <View style={style.buttons}>
                    <TouchableOpacity onPress={this.buttonHome}>
                        <Text style={style.textButton}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.buttonHome}>
                        <Text style={style.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        alignItems: 'center',
    },
    task: {
        color: '#000',
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 18
    },
    box: {
        marginTop: '5%',
        padding: 20,
        borderWidth: 1,
        borderColor: '#ACD7F2'
    },
    title: {
        borderBottomColor: '#AEAEAE',
        borderBottomWidth: 1,
        width: 200,
        height: 50
    },
    description: {
        borderBottomColor: '#AEAEAE',
        borderBottomWidth: 1,
        width: 200,
        height: 50
    },
    priority: {
        color: '#AEAEAE',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#AEAEAE',
        borderBottomWidth: 1
    },
    calendar: {
        color: '#AEAEAE',
        paddingTop: 10
    },
    buttons: {
        marginTop: '5%',
        flexDirection: 'row',
        width: 320,
        justifyContent: 'space-between'
    },
    textButton: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    }
})