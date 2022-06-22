import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ valBaba, onBaba, onBabaSend }) => {
    return (
        <View style={styler.barView}>
            <Ionicons name='search' size={18} style={styler.searchCon} />
            <TextInput 
                style={styler.searchPut} 
                placeholder="search"
                autoCapitalize='none'
                autoCorrect={false}
                value={valBaba}
                onChangeText={(inVal) => onBaba(inVal)}
                onEndEditing={() => onBabaSend(valBaba)}
            />
        </View>
    )
}

const styler = StyleSheet.create({
    barView: {
        backgroundColor: '#0000000D',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection: 'row',
    },
    searchCon: {
        flex: 1,
        alignSelf: 'center',
    },
    searchPut: {
        flex: 9,
    }
})

export default SearchBar