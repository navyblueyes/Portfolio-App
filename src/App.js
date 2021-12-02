import Profile from "./PortfolioContainer/Home/Profile";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLinkedin, faCopyright, faLinkedinIn);

function App() {
  return (
    <div className="App">
      <h1>HELLO HELLO</h1>
      <Profile />
    </div>
  );
}

export default App;
