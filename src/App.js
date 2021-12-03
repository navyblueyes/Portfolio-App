import Profile from "./PortfolioContainer/Home/Profile";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAws,
  fab,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faLinkedin, faCopyright, faLinkedinIn, faAws);

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
