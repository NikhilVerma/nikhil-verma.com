import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';

import '../styles/normalize.css';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={{}}>
            <Component {...pageProps} />
        </MDXProvider>
    );
}

export default App;
