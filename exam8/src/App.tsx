import Posts from "./pages/Posts/Posts";
import Add from "./pages/Add/Add";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/all" element={<Posts />}></Route>
          <Route
            path="/motivational"
            element={<Posts category="Motivational" />}
          ></Route>
          <Route
            path="/star-wars"
            element={<Posts category="Star Wars" />}
          ></Route>
          <Route
            path="/famous-people"
            element={<Posts category="Famous people" />}
          ></Route>
          <Route path="/humour" element={<Posts category="Humour" />}></Route>
          <Route path="/saying" element={<Posts category="Saying" />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
