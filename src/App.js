import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Events } from "./components/Events";

import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
<<<<<<< HEAD
      <Events />
      <Skills />
      <Team />
=======
      <Skills />
>>>>>>> d427370 (i completed expertise section and about us section and set all the images. remaining is services full section and some in contact us section)
       <Contact />
      <Footer />
    </div>
  );
}

export default App;
