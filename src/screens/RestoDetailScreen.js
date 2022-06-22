import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import yelp from '../api/yelp'

const RestoDetail = ({ navigation }) => {
    const [catchResto, setCatchResto] = useState(null)

    const theId = navigation.getParam('id')

    const RestoById = async (theId) => {
        const response = await yelp.get(`/${theId}`)
        setCatchResto(response.data)
    }

    useEffect(() => {
        RestoById(theId)
    }, [])

    if (!catchResto) {
        return (
            <View style={styler.contOne}>
                <Text>Loading..</Text>
            </View>
        )
    }

    return (
        <View style={styler.contOne}>
            <Text style={styler.restoTit}>{catchResto.name}</Text>
            <Text style={styler.restoDetail}>
                <Text>📞 </Text>
                {catchResto.display_phone}
                <Text> | 📍 </Text>
                {catchResto.location.display_address[1]}
            </Text>
            <FlatList
                data={catchResto.photos}
                keyExtractor={keyz => keyz.id}
                renderItem={({ item }) => {
                    return (
                        <Image style={styler.restoImage} source={{uri: item }}/>
                    )
                }}
            />
        </View>
    )
}

const styler = StyleSheet.create({
    contOne: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
    },
    restoImage: {
        borderRadius: 10,
        width: 288,
        height: 162,
        marginBottom: 15,
    },
    restoTit: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    restoDetail: {
        marginBottom: 15,
    }
})

export default RestoDetail