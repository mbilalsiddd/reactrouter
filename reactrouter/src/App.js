import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Main pages</h1>
     <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Service</li>
    
     </ul>
     {<Home/>}
   
    </div>
  );
}

export default App;
