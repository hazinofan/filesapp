import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import PersonalFiles from './Pages/PersonalFiles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/personalfiles' element={<PersonalFiles />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
