import './App.css';
import About from './about/About';
import DataApi from './components/api/DataAPI';
import Home from './pages/Home';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

function App() {
  return (
  <>
    {/* <Home/> */}
    <Router>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
