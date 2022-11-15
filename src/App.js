import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/home/";
import { Login } from "./pages/login/";

function App() {
  return (
    <Router>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/Login">
        <Login></Login>
      </Route>
    </Router>
  );
}

export default App;
