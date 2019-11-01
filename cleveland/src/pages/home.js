import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
} from 'react-native';

class Home extends Component {
    render() {
        return (
            <FlatList>
                <View>
                    <Text>Médicos</Text>
                    
                </View>
            </FlatList>
        );
    }
}

export default Home;