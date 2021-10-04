import React, { useState } from 'react'
import { 
    TextInput, 
    Button, 
    StyleSheet, 
    View } from 'react-native'

export default (props) => {

    const [descricao, setDescricao] = useState('')
    const [fabricante, setFabricante] = useState('')

    const clean = () => {
        setDescricao('')
        setFabricante('')
    }
    
    return (
        <View>
            <TextInput
                style = {style.input}
                placeholder = 'Insira aqui o produto'
                onChangeText = {(d) => setDescricao(d)}
                value = {descricao}
            />
            <TextInput 
                style = {style.input}
                placeholder = 'Fabricante'
                onChangeText={(f) => setFabricante(f)}
                value = {fabricante}
            />
            <View style = {style.botao}>
                <Button
                    title="Adicionar"
                    onPress={() => {
                        props.addCovid(descricao, fabricante)
                        clean()
                        }
                    }
                />
            </View>
            <View style = {style.botao}>
                <Button
                    title="Limpar Lista"
                    onPress={() => { props.limparLista() }}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        fontSize: 15,
        padding: 8,
        marginBottom: 12
    },
    botao: {
        marginVertical: 8
    }
})