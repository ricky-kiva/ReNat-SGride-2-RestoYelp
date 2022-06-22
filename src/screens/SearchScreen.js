import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestItem from '../hooks/useRestItem'
import RestoList from '../components/RestoListByPrice'

const theSearch = () => {
    const [baba, setBaba] = useState('')
    const [searchYelp, restItem, errMsg] = useRestItem()

    const FilterCatByPrice = (priceQ) => {
        return restItem.filter(item => {
            return item.price === priceQ
        })
    }

    return (
        <View style={styler.contOne}>
            <View style={styler.searchContInfo}>
                <Text style={styler.searchTit}>Search something:</Text>
                { errMsg 
                ? <Text style={{fontStyle: 'italic', flex: 1}}>{errMsg}</Text> 
                : <Text style={{flex: 1}}>You've found <Text style={{fontWeight: 'bold'}}>{restItem.length}</Text> restaurant!</Text>
                }
            </View>
            <SearchBar 
                valBaba={baba} 
                onBaba={(newBaba) => setBaba(newBaba)}
                onBabaSend={(valBaba) => searchYelp(valBaba)}
            />
            
            <ScrollView style={styler.contTwoList}>
                <RestoList
                    itemsByPrice={FilterCatByPrice('$')} 
                    title="Kost Friendly"
                />

                <RestoList
                    itemsByPrice={FilterCatByPrice('$$')} 
                    title="Average Pals"
                />

                <RestoList
                    itemsByPrice={FilterCatByPrice('$$$')} 
                    title="Mega Spender"
                />
            </ScrollView>
        </View>
    )
}

const styler = StyleSheet.create({
    contOne: {
        padding: 20,
        flex: 1,
    },
    searchTit: {
        flex: 1,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    searchContInfo: {
        flexDirection: 'row',
    },
    contTwoList: {
        paddingTop: 20,
    }
})

export default theSearch