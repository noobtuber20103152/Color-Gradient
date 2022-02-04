import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Source from './Components/Source/Source';
import OtherColors from './Other Colors/OtherColors';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Source />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/othercolors" element={<OtherColors />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
