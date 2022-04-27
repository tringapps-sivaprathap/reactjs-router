import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import UserLogin from "./UserLogin";
import About from "./About";
import Profile from "./Profile";
import Error from "./Error";
import AuthProvider from "./auth";

function App() {
  return (
    <AuthProvider>
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/about" element={<About />}>
            <Route path=":username" element={<Profile />}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
