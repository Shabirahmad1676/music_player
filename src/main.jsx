import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <UserContext>
    <App />
  </UserContext>
  </Provider>
)
