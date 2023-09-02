import logo from './logo.svg';
import './App.css';
import Dashboard from './componets/Dashboard';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard /> {/* Renderiza tu componente Dashboard aquí */}
    </div>
  );
}

export default App;
