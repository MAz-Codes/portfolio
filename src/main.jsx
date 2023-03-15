import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";

import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  )
