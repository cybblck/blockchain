import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Events } from "./components/Events";

import { Projects } from "./components/Projects";
<<<<<<< HEAD
import { Do } from "./components/Do";

import { Team } from "./components/Team";
=======
import { Team } from "./components/Team";

>>>>>>> dc98760 (team changes)
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Events />
      <Skills />
      <Do />
      <Team />
       <Contact />
      <Footer />
    </div>
  );
}

export default App;
