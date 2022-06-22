import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import RestoPriceDetail from './RestoDetailByPrice'

const CatPrice = ({ title, itemsByPrice, navigation }) => {

    if (!itemsByPrice.length) {
        return null
    }

    return (
        <View style={styler.catOne}>
            <Text style={styler.catTit}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={itemsByPrice}
                keyExtractor={(keyz) => keyz.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('RestoDetail', { id: item.id })}>
                                <RestoPriceDetail restoListData={item}/>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styler = StyleSheet.create({
    catOne: {
        marginBottom: 20,
    },
    catTit: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
})

export default withNavigation(CatPrice)