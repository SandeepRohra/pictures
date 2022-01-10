import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID PbaeH0pSj_5nwFWICa7UqhlsXlNSqFR5o_qVlOcZRCQ `,
  },
})
