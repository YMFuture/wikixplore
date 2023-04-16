import { Route, Routes } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Page } from "./Routes/Page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
      <Route path="/page/:id" element={<Page />} />
    </Routes>
  );
}