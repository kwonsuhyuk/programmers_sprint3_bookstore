import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoreThemeProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";
import Detail from "./pages/Detail";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/book/:bookId",
    element: <BookDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
];

const newRouteList = routeList.map((route) => {
  return {
    ...route,
    element: <Layout>{route.element}</Layout>,
    errorElement: <Error />,
  };
});

const router = createBrowserRouter(newRouteList);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
