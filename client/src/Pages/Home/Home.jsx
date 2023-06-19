import SearchBox from "../../components/SearchBar/SearchBar";
import Navbar from "../../components/Navbar/Navbar";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar"
import FAQSection from "./Faq/Faq";

const Home = () => {

  return (
    <>
        <Navbar/>
        <SearchBox/>
        <FAQSection/>
        <BottomNavbar/>
    </>
  );
};

export default Home;