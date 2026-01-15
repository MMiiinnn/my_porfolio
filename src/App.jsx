import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <main className="bg-bg-dark min-h-screen">
      {/* Navbar is outside Routes so it's always visible */}
      <Navbar />

      <Routes>
        {/* The Home component contains all your scrollable sections */}
        <Route path="/" element={<Home />} />

        {/* You can still add separate pages later if needed */}
        {/* <Route path="/archive" element={<Archive />} /> */}
      </Routes>
    </main>
  );
}

export default App;
