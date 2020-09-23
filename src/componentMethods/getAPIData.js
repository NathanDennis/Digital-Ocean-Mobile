import axios from 'axios'
const getAPIData = async (url) => {
    return await axios
        .get(`${process.env.VUE_APP_API_URL}/${url}`, {
            headers: {
                Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
            },
        })
}

export default getAPIData