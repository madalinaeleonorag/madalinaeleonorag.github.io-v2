import "./App.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Educations from "./components/Educations/Educations";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Awards from "./components/Awards/Awards";
import Publications from "./components/Publications/Publications";
import Photography from "./components/Photography/Photography";
import Recommendations from "./components/Recommendations/Recommendations";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="down-arrow-dark">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Skills />
      <Experiences />
      <Educations />
      <div className="down-arrow-light">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Certifications />
      <div className="down-arrow-dark">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Projects />
      <Awards />
      <Publications />
      <div className="down-arrow-light">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Photography />
      <div className="down-arrow-dark">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Recommendations />
      <div className="down-arrow-light">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Contact />
      <div className="copyright">© Madalina-Eleonora Gheorghe 2021</div>
    </div>
  );
}

export default App;
