import {Navigate, Route, Routes} from "react-router";
import Menu from "./components/pages/Menu";
import About from "./components/pages/About";
import Reservation from "./components/pages/Reservation";
import Celebrities from "./components/pages/Celebrities";

function App() {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/celebrities" element={<Celebrities />} />
      <Route path="/" element={<Navigate to="/menu" />} />
    </Routes>
  );
}

export default App;
