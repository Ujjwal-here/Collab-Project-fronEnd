import LayoutContextProvider from '../context/LayoutContext';
import '../../public/css/styles.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <LayoutContextProvider>
                <Component {...pageProps} />
            </LayoutContextProvider>
        </>
    );
}
