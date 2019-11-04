import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            medicos: []
        };
    }

    componentDidMount() {
        this._listarMedicos();
    }

    _listarMedicos = async () => {
        await fetch('http://192.168.4.203:5000/api/medicos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ medicos: data }))
            .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <View>
                    <Text> Médicos</Text>
                <View>
                    <FlatList
                        data={this.state.medicos}
                        keyExtractor={item => item.idMedico}
                        renderItem={({ item }) => (
                            <View style={styles.table}>
                                <Text style={styles.title}>{item.nome}</Text>
                                <Text style={styles.data}>{item.dataNascimento}</Text>
                                <Text style={styles.data}>{item.crm}</Text>
                                <Text style={styles.data}>{item.idFormNavigation.nome}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    data:{

    },
    title:{

    },

});
