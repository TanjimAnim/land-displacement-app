import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Map from "./components/map";
import Profile from "./components/profile";
import Download from "./components/download";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='side-navbar'>
        <Sidebar />
      </div>
      <div className='display-pages'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='map' element={<Map />} />
          <Route path='profile' element={<Profile />} />
          <Route path='download' element={<Download />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
