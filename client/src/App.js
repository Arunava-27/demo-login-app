import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Username from "./components/Username";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Page from "./components/Page";
import Register from "./components/Register";
import Recovery from "./components/Recovery";
import Reset from "./components/Reset";
import PageNotFound from "./components/PageNotFound";
// root routes

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Username/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/password",
      element: <Password/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
    {
      path: "/page",
      element: <Page/>,
    },
    {
      path: "/recovery",
      element: <Recovery/>,
    },
    {
      path: "/reset",
      element: <Reset/>,
    },
    {
      path: "*",
      element: <PageNotFound/>,
    },
  ]
)

function App() {
  return (
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>     
  );
}

export default App;
