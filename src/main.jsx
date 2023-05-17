import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import 
import { MainContextProvider } from './context/MainContext.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </BrowserRouter>
)
