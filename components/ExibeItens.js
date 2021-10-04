import React, { Component, useState } from 'react'
import { 
    TextInput, 
    Text, 
    Button, 
    StyleSheet, 
    View, 
    FlatList} from 'react-native'

import ExibeItem from './ExibeItem'

export default class ExibeItens extends Component {

    state = {
        covids: null,
        chave: 0
    }

    atualizar = () => {
        this.setState({covids: this.props.covids})
        // console.log("atualizar", this.props.covids)
    }

    componentDidUpdate() {
        
        if (this.props.chave !== this.state.chave) {
            this.atualizar()
            this.setState({chave: this.props.chave})
        }
    }

    render () {
        return (
            <View style = {{marginTop: 8, height: 400}}>
                <FlatList 
                    data = {this.state.covids}
                    renderItem = {
                        produto => (
                            <>
                                <ExibeItem 
                                    desc = {produto.item.descricao}
                                    fab = {produto.item.fabricante}
                                />
                            </>
                        )
                    }
                />                
            </View>
        )
    }
}
