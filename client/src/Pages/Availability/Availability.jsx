import SearchBo from "../../components/SearchBar/SearchB";
// import "../components/SearchBar/SearchB.css";
import Navbar from "../../components/Navbar/Navbar";
import TrainCard from "../../components/TrainCard/TrainCard";
import FilteringComponent from "./Filters";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Availability = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  const trains = useSelector((state) => state.trainsReducer);
  console.log(trains);
  const trainData = trains.data;

  return (
    <>
        <Navbar/>
        <div style={{ display: 'flex' }}>
          <SearchBo/>
          <FilteringComponent/>
        </div>
        {trainData.map(train => (
        <TrainCard train={train} />
      ))}
    </>
  );
};

export default Availability;