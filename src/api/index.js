import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://backendnodejstzuzulcode.uw.r.appspot.com',
})

const post = async (url, data) => {
  try {
    const result = await instance.post(url, data, {
      withCredencials: true,
    })
    return result.data
  } catch (error) {
    throw error.response.data
  }
}

export { post }
