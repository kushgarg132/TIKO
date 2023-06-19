import SearchBo from "../../components/SearchBar/SearchB";
import Navbar from "../../components/Navbar/Navbar";
import TrainCard from "../../components/TrainCard/TrainCard";
import FilteringComponent from "./Filters";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Availability = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const trains = useSelector((state) => state.trainsReducer);
  console.log(trains);
  const trainData = trains.data;

  const {fromCity,toCity} = useParams();

  console.log(fromCity);
  console.log(toCity);
  return (
    <>
        <Navbar/>
        <div style={{ display: 'flex' }}>
          <SearchBo/>
          <FilteringComponent/>
        </div>
        {trainData.map(train => (
        <TrainCard train={train} fromCity={fromCity} toCity={toCity}/>
      ))}
    </>
  );
};

export default Availability;