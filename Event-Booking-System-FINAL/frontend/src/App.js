import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}