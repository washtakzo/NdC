import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/store";
import Header from "../components/Header";
import { ThemeProvider } from "@mui/material/styles";
import materialUITheme from "../material-ui/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={materialUITheme}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            {/* ---Fonts--- */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Italiana&family=Poppins:wght@100;200;600&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
