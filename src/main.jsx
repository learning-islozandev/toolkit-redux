import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import { store } from './store'
import { PokemonApp } from './PokemonApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}

      <PokemonApp />
    </Provider>
  </StrictMode>,
)
