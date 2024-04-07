import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  function greeting() {
    alert("準備中だぜ!");
  }

  function noItem() {
    alert("レスポンシブは気が向いたらやる!");
  }

  return (
    <div className="App">
      <header className="header">
      <Button variant="primary">Primary</Button>{' '}
      </header>
    </div>
  );
}

export default App;
