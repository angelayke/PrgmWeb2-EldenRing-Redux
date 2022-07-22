import Container from "react-bootstrap/Container";
import Eldenrings from '../eldenring/components/Eldenrings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualEldenring from '../eldenring/components/IndividualEldenring';
//verif ou je dois le mettre
//const LoginForm = () => {
 // const [formData, setFormData] = useState({
  //  email: "",
  //  password: "",
  //  name: "",
 //   lastname: "",
//  });

//  return (
    //coupé pour etre plus bref
//  ) 
//}

function App() {
  return (
    <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/eldenring" element={<Eldenrings />} />
        <Route path="/eldenring/:id" element={<IndividualEldenring />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
