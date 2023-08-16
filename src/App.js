import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./scss/main.scss";
import "aos/dist/aos.css";
import AOS from 'aos'
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "./layout";
import { GlobalProvider } from "./contextAPI/globalState";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({duration:1500});
    AOS.refresh();
  },[])
  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <link href="./assets/favicon.png" rel="icon" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
          <script
            src="https://kit.fontawesome.com/13cbec302f.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>

        <Layout />
      </Router>
    </GlobalProvider>
  );
}

export default App;
