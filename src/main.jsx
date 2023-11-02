import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.js'
import { UIProvider } from './context/UIProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UIProvider>
    <RouterProvider router={router} />
  </UIProvider>
)
