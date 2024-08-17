import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <RouterProvider router={router}/>     
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
