import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../Framework/Components/Theme';
import {wrapper} from "../Framework/store/store";
import {END} from 'redux-saga'
import {ActionInitialLogin} from "../Framework/store/user";
import {ActionGetFavorites} from "../Framework/store/articles";

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };
        const storState = ctx.store.getState();
        if (ctx.req) {
            ctx.store.dispatch(ActionInitialLogin(ctx));
            ctx.store.dispatch(ActionGetFavorites(ctx));
        } else {
            ctx.store.dispatch(ActionInitialLogin(ctx));
            ctx.store.dispatch(ActionGetFavorites(ctx));
        }

        ctx.store.dispatch(END)
        await ctx.store.sagaTask.toPromise();
        return {pageProps}
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <title>My page</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>

            </>
        );
    }
}

export default wrapper.withRedux(MyApp)


