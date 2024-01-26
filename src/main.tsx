import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './views/home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import information from './utils/information.json'
import './index.css'
import { Box, CircularProgress } from '@mui/material';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={information} />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={
       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    }>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
