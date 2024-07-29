import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="App-title">Fib Calculator</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
