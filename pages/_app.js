import '../styles/globals.css'
import { FliesProvider } from '../context/FliesContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <FliesProvider>
      <Component {...pageProps} />
    </FliesProvider>
  );
}
