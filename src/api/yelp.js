import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer yGe1ZA3hcnDNlADj494TAlgTGXdxHKBYozchPPa6w9dtq3flhW_qHoGX01JOv6IpdDpX_DP5IqfAk68CSYsVB2jgDyHv0Vbu80YSymLfv8M3B36nUVqntKHEqTCjYnYx'
    }
})