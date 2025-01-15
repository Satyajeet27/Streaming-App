import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { SearchProvider } from './components/context/SearchContext.tsx'


createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <SearchProvider>
      <App />
    </SearchProvider>
  </Provider>

)
