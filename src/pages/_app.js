import '@/styles/globals.css';
import { QuiscoProvider } from '@/context/QuiscoProvider';

export default function App({ Component, pageProps }) {
  return (
    <QuiscoProvider>
      <Component {...pageProps} />
    </QuiscoProvider>
  );
}
