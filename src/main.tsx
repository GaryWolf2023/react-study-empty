import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './style/global.css'
import './style/app.color.scss'
import './style/app.config.scss'

import { Provider } from 'react-redux'
import store from './store/index.ts'
import App from './App.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

