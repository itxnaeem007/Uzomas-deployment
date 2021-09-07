import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '~/store/store';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import '~/scss/style.scss';
import '~/scss/style.scss';
import '~/scss/home-default.scss';
import '~/scss/market-place-1.scss';
import '~/scss/market-place-2.scss';
import '~/scss/market-place-3.scss';
import '~/scss/market-place-4.scss';
import '~/scss/electronic.scss';
import '~/scss/furniture.scss';
import '~/scss/organic.scss';
import '~/scss/technology.scss';
import '~/scss/autopart.scss';
import '~/scss/electronic.scss';
import '~/scss/custom.scss';

const getLibrary = (provider) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
};

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
    }

    componentDidMount() {
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);

        this.setState({ open: true });
    }
    render() {
        const { Component, pageProps, store } = this.props;
        const getLayout =
            Component.getLayout ||
            ((page) => <DefaultLayout children={page} />);
        return getLayout(
            <Provider store={store}>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <PersistGate
                        loading={<Component {...pageProps} />}
                        persistor={this.persistor}>
                        <Component {...pageProps} />
                    </PersistGate>
                </Web3ReactProvider>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
