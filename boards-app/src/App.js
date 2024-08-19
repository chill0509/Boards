import logo from './logo.svg';
import './App.css';
import BoardCanvas from '../BoardCanvas';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Board from './Board';

const socket = io('http://localhost:5000');

socket.on('connect', () => {
  console.log('Connected to server');
});

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/board/:id" component={Board} />
      </Switch>
    </Router>

    //https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
