import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

const RestoPriceDetail = ({ restoListData }) => {
    const restoName = restoListData.name

    return (
        <View style={styler.contOne}>
            <Image style={styler.restoImage} source={{ uri: restoListData.image_url }}/>
            {restoName.length > 18 
            ? <Text style={styler.restoName}>{restoName.substring(0,17)} ...</Text> 
            : <Text style={styler.restoName}>{restoName}</Text>}
            <Text style={styler.restoReview}>{restoListData.rating} ★ | {restoListData.review_count} Reviews </Text>
        </View>
    )
}

const styler = StyleSheet.create({
    contOne: {
        marginRight: 15,
    },
    restoName: {
        fontWeight: 'bold',
        marginTop: 7.5,
        marginBottom: 5,
    },
    restoReview: {
    },
    restoImage: {
        borderRadius: 10,
        width: 144,
        height: 81,
    }
})

export default RestoPriceDetail