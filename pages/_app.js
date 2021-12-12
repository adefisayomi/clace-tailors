import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import GlobalContext from '../src/context/globalContext'
import Wrapper from '../src/components/wrapper/wrapper'
import {SWRConfig} from 'swr'
import axios from 'axios'




export default function app ({ Component, pageProps }) {

  axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:4000/api' : 'https://tailorapi.devbyclace.com/api'
  axios.defaults.withCredentials = true
  axios.defaults.headers['Content-Type'] = 'application/json'


  return (
    <SWRConfig
        value={{
          revalidateOnFocus: true,
          refreshInterval: 0,
          fetcher: (...args) => axios(...args)
          .then(res => res?.data.data)
          .catch(err => Promise.reject(err))
        }}
      >

      <GlobalContext>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </GlobalContext>
    </SWRConfig>
  )
} 
