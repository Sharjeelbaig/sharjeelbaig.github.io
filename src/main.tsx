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
import { Box, CircularProgress, ThemeProvider } from '@mui/material';
import theme from './utils/theme';


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
      <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
)
