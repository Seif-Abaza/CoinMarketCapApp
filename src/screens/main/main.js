import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';

import CoinItem from '../../components/coin-item';

export default class Main extends Component {

    getCoinsCards() {
        return this.props.coins.map(({id, name, symbol, quote}) => 
            <CoinItem name={name} symbol={symbol} key={id} price={quote.USD.price} />
        )
    }

    render() {
        console.log(this.props.coins)
        return (
            <SafeAreaView>
                <ScrollView>
                    {this.getCoinsCards()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}
