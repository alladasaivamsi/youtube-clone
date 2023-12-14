import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_App.scss";
import { useState } from "react";

function App() {
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
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
