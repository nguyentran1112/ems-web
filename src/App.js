import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import ListDevices from "./pages/ListDevices";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Report from "./pages/Report";
import TopoLink from "./pages/TopoLink";
import Setting from "./pages/Setting";
import ListUser from "./pages/ListUser";
import Footer from './components/Footer';
import Detail from "./pages/Detail";

function App() {
  return (
    <>
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listdevices' element={<ListDevices/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/topoLink' element={<TopoLink/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/listuser' element={<ListUser/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
      
    <Footer />
    </div>
    </>
  );
}

export default App;
