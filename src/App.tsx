import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <main className="mx-5 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/example/:exampleId" element={<Example />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
