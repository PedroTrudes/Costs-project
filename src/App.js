import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home';
import Contato from './components/pages/contato/Contato';
import Header from './components/layout/header/Header';

import Container from './components/layout/container/Container';
import Company from './components/pages/company/Company';
import NewProject from './components/pages/newProject/NewProject';
import Projects from './components/pages/projects/Projects';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/company" element={<Company />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
