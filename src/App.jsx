import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Myskill from "./myskill";
import Myproject from "./myproject";
import Mycontact from "./mycontact";

function App(){

return(
<>
  <Navbar />

  <section id="Home">
    <Hero />
  </section>

  <section id="About">
    <About />
  </section>

  <section id="Skills">
    <Myskill />
  </section>

  <section id="Project">
    <Myproject />
  </section>

  <section id="Contact">
    <Mycontact />
  </section>

</>
)

}

export default App;