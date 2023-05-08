import SearchBox from "../../components/SearchBar/SearchBar";
// import "../components/SearchBar/SearchBar.css";
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