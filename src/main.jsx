import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ChakraProvider,ColorModeScript } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import theme from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <ChakraProvider theme={theme}>
      <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <App />
     </BrowserRouter>
  </ChakraProvider>
  
    
  
)
