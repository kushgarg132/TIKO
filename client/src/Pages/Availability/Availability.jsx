import SearchBo from "../../components/SearchBar/SearchB";
// import "../components/SearchBar/SearchB.css";
import Navbar from "../../components/Navbar/Navbar";
import TrainCard from "../../components/TrainCard/TrainCard";
import FilteringComponent from "./Filters";

const Availability = () => {
  

  return (
    <>
        <Navbar/>
        <div style={{ display: 'flex' }}>
          <SearchBo/>
          <FilteringComponent/>
        </div>
        <TrainCard/>
        <TrainCard/>


    </>
  );
};

export default Availability;