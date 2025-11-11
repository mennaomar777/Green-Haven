import GlobalStyles from "./styles/GlobalStyles";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import { Toaster } from "react-hot-toast";
import BookingDetails from "./pages/BookingDetails";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import DarkModeProider from "./context/DarkModeContext";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Navigate replace to="dashboard" /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/account", element: <Account /> },
        { path: "/bookings", element: <Bookings /> },
        { path: "/bookings/:bookingId", element: <BookingDetails /> },
        { path: "/checkin/:bookingId", element: <Checkin /> },
        { path: "/cabins", element: <Cabins /> },
        { path: "/settings", element: <Settings /> },
        { path: "/users", element: <Users /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <DarkModeProider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </DarkModeProider>
  );
}

export default App;
