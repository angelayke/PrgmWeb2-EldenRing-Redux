//import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eldenrings from '../eldenring/components/Eldenrings';


function App() {
  return (
    //<Container>
    <BrowserRouter>
      <Routes>
        <Route path="/eldenring" element={<Eldenrings />} />
        <Route path="/eldenring/:id" element={<IndividualEldenring />} />
      </Routes>
    </BrowserRouter>//</Container>
  );
}

export default App;
