import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import App from './App'
import { Main } from './components/Main/Main'
import { FormStep1 } from './components/Main/FormStep1/FormStep1'
import { FormStep2 } from './components/Main/FormStep2/FormStep2'
import { FormStep3 } from './components/Main/FormStep3/FormStep3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'step1',
        element: <FormStep1 />,
      },
      {
        path: 'step2',
        element: <FormStep2 />,
      },
      {
        path: 'step3',
        element: <FormStep3 />,
      },
    ],
  },
])

// ,{ basename: '/CloudCamp-test-form' }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
