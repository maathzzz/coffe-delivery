import { BrowserRouter} from 'react-router-dom'
import { Router } from './router/router'
import './styles/global.css'
import { CoffeesContextProvider } from './contexts/CoffeesContext'

function App() {
  return (
    <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
  )
}

export default App
