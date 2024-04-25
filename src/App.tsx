import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { Services } from "./routes/services";
import { Contact } from "./routes/contact";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
