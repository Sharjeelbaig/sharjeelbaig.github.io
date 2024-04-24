import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import information from "./utils/information.json";
import "./index.css";
import { Box, CircularProgress, Skeleton, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={information} />,
  },
]);
setTimeout(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Suspense
        fallback={
          <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        }
      >
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Suspense>
    </React.StrictMode>
  );
}, 1000);
