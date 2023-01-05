import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/player" element={ <Player /> } />
    </Routes>
  );
}

export default App;
