import Container from "react-bootstrap/Container";
import Eldenrings from '../eldenring/components/Eldenrings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualEldenring from '../eldenring/components/IndividualEldenring';
import store from from "../store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


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
