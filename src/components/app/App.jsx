import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <div className="app_container">
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
