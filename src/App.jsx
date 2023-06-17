// import { Outlet } from 'react-router-dom';
import Header from "./components/header";
// import './App.css'
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import MainLayout from "./pages/main-layout";
import LandingPage from "./pages/landing-page";
import AboutPage from "./pages/about";
import MainPage from "./pages/main-page";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import DetailPage from "./pages/detail-page";
import WritePost from "./components/home/write";
import PropTypes from 'prop-types'


function NewLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}



function useAuth() {
  let user;

  if (localStorage.getItem("auth_user")) {
    user = JSON.parse(localStorage.getItem("auth_user"));
  }

  

  return { user };
}

function PrivateRoute({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user ) {
    // return navigate("/login");
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
  // return <Route {...rest}>{children}</Route>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route path="timeline" element={<MainPage />} />
        <Route path="blog" element={<MainPage />} />
        <Route path="timeline/:id" element={<DetailPage />} />
        <Route path="blog/:id" element={<DetailPage />} />
        <Route path="timeline/write" element={<WritePost />} />
        <Route path="blog/write" element={<WritePost />} />
        <Route path="timeline/edit/:id" element={<WritePost/>} />
        <Route path="saved" element={<MainPage />} />
        {/* detail saved */}
        <Route path="saved/:id" element={<DetailPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* protected page */}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

// type checking
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

