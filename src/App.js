import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, getHistory } from './Store';
// Routes
import Routes from './Routes';
import NavBar from './Components/Navigation';

const history = getHistory()

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
                    <Router history={history}>
                        <PersistGate persistor={persistor}>
                            <NavBar />
                            <Routes />
                        </PersistGate>
                    </Router>
                </ConnectedRouter>
                </ThemeProvider>
            </Provider>
        );
    }
}