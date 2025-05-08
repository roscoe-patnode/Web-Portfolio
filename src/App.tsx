import CallToAct from "./components/CallToAct";
import Introduction from "./components/Introduction";
import NavigationBar from "./components/NavigationBar";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <>
      <NavigationBar />
      <Introduction />
      <ProjectList />
      <CallToAct />
    </>
  );
}

export default App;