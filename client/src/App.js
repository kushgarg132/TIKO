import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./AllRoutes";
import { getAllTrains } from './actions/trains';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTrains());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
