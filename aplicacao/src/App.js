
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';




function App() {
  const logo = 'Dev'
  return (
    <div className="container">
      
      <NavBar  logo={logo}/>
      <Home />

    

    </div>
  );
}

export default App;
