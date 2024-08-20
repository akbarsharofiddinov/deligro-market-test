import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EdisonContextProvider } from "./context/EdisonContext";
import ErrorComponent from "./components/ErrorComponent";
import { Footer, Header } from "./components";
import { Categories, Home } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/error",
      element: <ErrorComponent />,
    },
  ]);

  return (
    <EdisonContextProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </EdisonContextProvider>
  );
}

export default App;
