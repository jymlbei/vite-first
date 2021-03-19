import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import NewPage from './newpage'
import First from './hoc/first'
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/app' component={App}/>
      <Route path='/newpage' component={NewPage}/>
      <Route path='/first' component={First}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
