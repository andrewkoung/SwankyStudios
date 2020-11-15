import "./App.css";
import Nav from "../Generic/Navbar";
import Home from "../Pages/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
