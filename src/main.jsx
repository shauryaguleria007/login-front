import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import pages from './pages'
const { Login, Register, Error } = pages
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { RouteProtector } from './components/routeProtector'
import { Logout } from './pages/Logout'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path=''
            element={
              <RouteProtector>
                <App />
              </RouteProtector>
            }
          >
            <Route path='' element={<Dashboard />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
