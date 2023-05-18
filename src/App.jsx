import { Toaster } from "sonner";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-gray-800 overflow-y-hidden">
      <Routes>
        <Route element={<Header />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/completed" element={<Home />} />

        </Route>
      </Routes>
      <Toaster richColors position={'top-right'} closeButton />
    </div>
  );
}

export default App;
