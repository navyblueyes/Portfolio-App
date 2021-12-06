import Home from "./PortfolioContainer/Home/Home";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAws,
  fab,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import PortfolioContainer from "./PortfolioContainer/ProtfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

library.add(fab, faLinkedin, faCopyright, faLinkedinIn, faAws);

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
