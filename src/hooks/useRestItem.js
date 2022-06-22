import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [restItem, setRestItem] = useState([])
    const [errMsg, setErrMsg] = useState('')

    const searchYelp = async (searchWat) => {
        try {
            const respoYelp = await yelp.get('/search', {
                params: {
                    term: searchWat,
                    limit: 30,
                    location: 'san jose'
                }
            })
            setRestItem(respoYelp.data.businesses)
        } catch (e) {
            setErrMsg('Dang son, try again layter..')
        }
    }

    useEffect(() => searchYelp('Pink'), [])

    return [searchYelp, restItem, errMsg]
}