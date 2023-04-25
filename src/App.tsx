import { BrowserRouter} from 'react-router-dom'
import { Router } from './router/router'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
          <Router />
      </BrowserRouter>
  )
}

export default App
