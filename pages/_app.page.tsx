import '../styles/globals.css';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import MatrixLayout from '../components/layouts/MatrixLayout';

const ScrollSensor = dynamic(() => import('react-scrollsense'), {
  ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollSensor config={{}}>
      <MatrixLayout>
        <Component {...pageProps} />
      </MatrixLayout>
    </ScrollSensor>
  )
}

export default MyApp
