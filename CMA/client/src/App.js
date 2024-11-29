import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Contactus from "./components/Contactus.js";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Layout>
  );
}

export default App;
