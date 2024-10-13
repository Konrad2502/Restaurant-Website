import Advert from "./components/Advert/Advert";
import Header from "./components/Header/Header";
import Choice from "./components/Choice/Choice";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import Specials from "./components/Specials/Specials";
import Parties from "./components/Events/Events";
import Booking from "./components/Booking/Booking";
import Gallery from "./components/Gallery/Gallery";
import Chefs from "./components/Chefs/Chefs";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Advert/>
      <Choice/>
      <Menu/>
      <Specials/>
      <Parties/>
      <Booking/>
      <Gallery/>
      <Chefs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
