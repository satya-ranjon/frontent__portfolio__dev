import { About, Skills, Header, Footer, Testimonial, Works } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
