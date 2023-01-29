import '../styles/globals.scss'

import { store } from "../store/store";
import { Provider } from "react-redux";
import { StrictMode } from 'react';

function MyApp({ Component, pageProps }) {
  return <StrictMode><Provider store={store}><Component {...pageProps} /></Provider></StrictMode>
}

export default MyApp
