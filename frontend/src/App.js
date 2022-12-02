import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/pages/Home";
import Student from "./layout/pages/Students";
import Login from "./layout/admin/Login";
import EditDomain from "./layout/pages/EditDomain";
import AddDomain from "./layout/pages/AddDomain";
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Router>
        <Navbar />
        <Routes>{
          <Route exact path="/" element={<Login />} />}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/editDomain/:id" element={<EditDomain />} />
          <Route exact path="/students/:id" element={<Student />} />
          <Route exact path="/addDomain" element={<AddDomain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;