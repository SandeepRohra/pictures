import axios from 'axios'
//yaha p apan axios.create use kiye y axios ka ek funtion h
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID PbaeH0pSj_5nwFWICa7UqhlsXlNSqFR5o_qVlOcZRCQ `,
  },
})

// yaha p apan jab export default axios.create kiye to vo kaam nii kiya
//shayd ek constant bana k karta to kaam karjata
