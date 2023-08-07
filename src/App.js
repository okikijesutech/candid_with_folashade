import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import About from "./pages/about/About"
import Blogs from "./pages/blogs/Blogs";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post/:postId" element={<Settings/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/single" element={<Single/>} />
        <Route path="/blogs" element={<Blogs/>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
