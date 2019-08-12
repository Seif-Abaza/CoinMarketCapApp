import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CoinItem = ({name, symbol, price}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.name} >{`${name} (${symbol})`}</Text>
            <Text>{`${price.toFixed(2)}$`}</Text>
        </View>
    )
}

export default CoinItem;
