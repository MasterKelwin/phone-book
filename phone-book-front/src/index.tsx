import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactForm from './components/contact-form/contact-form';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contact/:id?',
    element: <ContactForm />,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

