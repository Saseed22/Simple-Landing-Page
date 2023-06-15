import Contact from "./components/Contact";
import Flag from "./components/Flag";
import Navbar from "./components/Navbar";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Timeline from "./components/Timeline";
import Video from "./components/Video";

function App() {
  return (
    <div>
      <Navbar />
      <header>
      <Flag />
      </header>
      <main>        
        <Timeline />
        <section>
          <SectionOne />
          <SectionTwo />
        </section>
        <Video />
        <section>
          <SectionThree />
          <SectionFour />
        </section>
      </main>
      <footer>
      <Contact />
      </footer>
    </div>
  );
}

export default App;
