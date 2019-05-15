import React from 'react'
import App from './components/App.jsx'
import { render } from 'react-dom'
import { store } from './store'
import Provider from 'react-redux/es/components/Provider'
import { EnvironmentThemeProvider } from '@codex/themes'

render(
    <Provider store={store}>
        <EnvironmentThemeProvider>
            <App/>
        </EnvironmentThemeProvider>
    </Provider>,
    document.getElementById('root'),
)
