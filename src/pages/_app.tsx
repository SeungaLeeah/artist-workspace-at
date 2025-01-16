import React from 'react';
import '../assets/styles/globals.css';
import '../assets/styles/fonts.css';
import '../assets/styles/colors.css';
import '../assets/styles/mgPd.css';

const App = ({ Component, pageProps }: any) => {
    return <Component {...pageProps} />;
};

export default App;
