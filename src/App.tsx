import Introduction from "./components/Introduction";
import NavigationBar from "./components/NavigationBar";
import ProjectList from "./components/ProjectList";
import CallToAct from "./components/CallToAct";
import Footer from "./components/Footer";

const github = "https://github.com/roscoe-patnode";
const linkedin = "https://www.linkedin.com/in/roscoe-patnode/";
const email = "rpatnode02@gmail.com";
const youtube = "https://www.youtube.com/@RoscoePatnode";


function App() {
  return (
    <>
      <NavigationBar 
        github={github}
        linkedin={linkedin}
        email={email}
      />
      <Introduction />
      <ProjectList />
      <CallToAct />
      <Footer 
        github={github}
        linkedin={linkedin}
        email={email}
        youtube={youtube}
      />
    </>
  );
}

export default App;