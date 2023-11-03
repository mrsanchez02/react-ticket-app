import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.js'
import { UIProvider } from './context/UIProvider'
import { SocketProvider } from './context/SocketContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </SocketProvider>
)
