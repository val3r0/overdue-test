import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const ax = axios({
  method: "get",
  url: "https://connect.squareup.com/v2/payments",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: `Bearer EAAAEEZJfISawonwneMQCyJ2ZDsj60AVk0FKyNyd-d6wLt31Z3Fd45HvfajbJwo1`,
    withCredentials: true,
    mode: 'no-cors',
  },
}).then((response) => {
  console.log(response.data);
});

console.log(ax)

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
