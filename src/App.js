import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home';
import Contato from './components/pages/contato/Contato';
import Header from './components/layout/header/Header';

import Container from './components/layout/container/Container';

function App() {
  return (
    <Router>
      <Header />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Container>
    </Router>
  );
}

export default App;
