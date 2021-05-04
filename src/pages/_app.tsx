import { AppProps } from 'next/app'
import {Header} from '../components/Header';
import { ToastContainer, Slide } from 'react-toastify';
import { CartProvider } from '../hooks/useCart';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </CartProvider>
  )
}

export default MyApp
