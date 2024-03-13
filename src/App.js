import "./App.css";
import AccordionOption from "./Components/AccordionOption/AccordionOption";
import Advertisement from "./Components/Advertise/Advertisement";
import Banner from "./Components/Banner/Banner";
import BrochureCardComponent from "./Components/BrochureCardComponent/BrochureCardComponent";
import CardContainer from "./Components/CardContainer/CardContainer.js";
import FooterComponent from "./Components/Social/FooterComponents";

function App() {
  return (
    <>
      <Banner />
      <BrochureCardComponent />
      <CardContainer />
      <Advertisement />
      <AccordionOption />
      <FooterComponent />
    </>
  );
}

export default App;
