import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import '../assets/styles/globals.css';
import '../assets/styles/fonts.css';
import '../assets/styles/colors.css';
import '../assets/styles/mgPd.css';
import MainLayout from '../layouts/mainLayout';


type AppPropsWithLayout = AppProps & {
    Component: NextPage & { getLayout?: (page: React.ReactNode) => React.ReactNode };
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {

    const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

    return getLayout(<Component {...pageProps} />);
};

export default App;
