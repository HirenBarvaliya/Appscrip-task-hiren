import './App.css';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Skills from './pages/Skills';
import Stories from './pages/Stories';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='skills' element={<Skills />} />
            <Route path='stories' element={<Stories />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
