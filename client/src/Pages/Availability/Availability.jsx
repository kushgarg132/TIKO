import SearchBo from "../../components/SearchBar/SearchB";
// import "../components/SearchBar/SearchB.css";
import Navbar from "../../components/Navbar/Navbar";
import TrainCard from "../../components/TrainCard/TrainCard";
import FilteringComponent from "./Filters";

const Availability = () => {

  // dummy data
  const trains = [
    {
      name:"Chennai Express",
      number:12345,
      departure: "3:30 PM",
      dep_station: "Chennai",
      arr_station: "Pune",
      arrival: "8:30 PM",
      duration:"5h 55m",
      sleeper: 50,
      slprice: 1000,
      acprice: 1500,
      ac: 30,
    },
    {
      name:"Mumbai Express",
      number:54321,
      departure: "10:30 PM",
      dep_station: "Mumbai",
      arr_station: "Pune",
      arrival: "12:30 PM",
      duration:"2h 0m",
      sleeper: 100,
      slprice:1000,
      acprice:1500,
      ac: 80,
    }

  ]

  

  

  return (
    <>
        <Navbar/>
        <div style={{ display: 'flex' }}>
          <SearchBo/>
          <FilteringComponent/>
        </div>
        {trains.map(train => (
        <TrainCard train={train} />
      ))}
        


    </>
  );
};

export default Availability;