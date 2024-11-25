// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import YoVirtual from './pages/YoVirtual'
import Salir from './pages/login'
import Cursor from './components/ui/Cursor';



const App: React.FC = () => {
  return (

    <div>
      <Cursor />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/yovirtual' element={<YoVirtual />} />
          <Route path='/salir' element={<Salir />} />

        </Routes>
      </Router>
    </div>

  );
};

export default App;