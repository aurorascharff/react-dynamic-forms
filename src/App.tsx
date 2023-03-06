import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes />
    </BrowserRouter>
  );
}
export default App;
