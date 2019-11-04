import React, {Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    FlatList,
} from 'react-native';

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            forms: []
        };
    }

    componentDidMount() {
        this._listarFormacoes();
    }

    _listarFormacoes = async () => {
        await fetch('http://192.168.4.203:5000/api/formacoes')
            .then(resposta => resposta.json())
            .then(data => this.setState({ forms: data }))
            .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <View>
                    <Text> Formações</Text>
                <View>
                    <FlatList
                        data={this.state.forms}
                        keyExtractor={item => item.idForm}
                        renderItem={({ item }) => (
                            <View style={styles.table}>
                                <Text style={styles.title}>{item.nome}</Text>
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


