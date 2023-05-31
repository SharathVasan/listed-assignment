// Dependency imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "./recoil/atoms/userState";

// Local imports
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";

// Style imports
import "./App.css";

function App() {
  //eslint-disable-next-line
  const [user, setUser] = useRecoilState(userState);
  //eslint-disable-next-line

  return (
    <div>
      <Router>
        {user.access_token !== undefined ? (
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="*" element={<Dashboard />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Auth />} />
            <Route exact path="*" element={<Auth />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
