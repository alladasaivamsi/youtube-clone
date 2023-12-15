import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_App.scss";
import { useEffect, useState } from "react";
import LoginScreen from "./Components/Screens/LoginScreen/LoginScreen";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LayOut = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className="App">
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container border border-info">
        <Sidebar
          toggleSidebar={toggleSidebar}
          handleToggleSideBar={handleToggleSideBar}
        />
        <Container fluid className="app_main border border-warning">
          {children}
        </Container>
      </div>
    </div>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <LayOut>
            <HomeScreen />
          </LayOut>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/search"
        element={
          <LayOut>
            <h1>Search Results</h1>
          </LayOut>
        }
      />
      <Route
        path="/*"
        element={
          <LayOut>
            <HomeScreen />
          </LayOut>
        }
      />
    </Routes>
  );
}

export default App;
