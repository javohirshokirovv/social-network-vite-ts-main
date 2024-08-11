import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/main-page",
    element: <MainPage/>
  },
  {
    path: "/profile-page",
    element: <ProfilePage/>
  },
])

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={router}/>     
        </div>
      </div>
    </>
  );
}

export default App;
