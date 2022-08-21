import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Map from "./components/map/map";
import Profile from "./components/profile/profile";
import Download from "./components/download/download";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='side-navbar'>
        <Sidebar />
      </div>
      <div className='display-pages'>
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='map' element={<Map />} />
          <Route path='profile' element={<Profile />} />
          <Route path='download' element={<Download />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
