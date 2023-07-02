import Posts from "./pages/Posts/Posts";
import Add from "./pages/Add/Add";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/Quotes" element={<Posts />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
