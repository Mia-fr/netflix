import "./App.css";
import Section from "/components/Section";
import filmPicture from "/src/img/abstract.png";

function App() {
  return (
    <>
      <Section titleOfCategory="Emission TV" filmPicture={filmPicture} />
      <Section titleOfCategory="Series Francaises" filmPicture={filmPicture} />
    </>
  );
}

export default App;
