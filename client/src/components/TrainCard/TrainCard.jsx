import React from "react";
import "./TrainCards.css";
import { Navigate, useNavigate } from "react-router-dom";


import { getTrain } from '../../actions/trains';

const TrainCard = (props) => {
  const history=useNavigate()
  
  const sendTrain = (train) =>{
    const queryParams = new URLSearchParams({data:JSON.stringify(train)}).toString();
    history(`/book?${queryParams}`);
  }
  

  return (
    
    <div className="train-card">
      <div className="train-card-header">
        <div className="train-name">{props.train.trainName}</div>
        <div className="train-number">#{props.train.trainNumber}</div>
        <div className="train-days">
          <div className="train-day">
            <span className="day-label">{props.train.journeyDay}</span>
          </div>
          {/* <div className="train-day">
            <span className="day-label">M</span>
          </div>
          <div className="train-day">
            <span className="day-label">T</span>
          </div>
          <div className="train-day">
            <span className="day-label">W</span>
          </div>
          <div className="train-day">
            <span className="day-label">T</span>
          </div>
          <div className="train-day">
            <span className="day-label">F</span>
          </div>
          <div className="train-day">
            <span className="day-label">S</span>
          </div> */}
        </div>
      </div>
      <div className="train-card-body">
        <div className="train-info">
          <div className="train-info-left">
            <div className="train-departure-time">
              {props.train.route[0].departureTime}
            </div>
            <div className="train-departure-station">
              {/* {props.train.route[0].stationName} */}
              {props.fromCity}
            </div>
          </div>
          <div className="train-info-left-left">➔</div>
          <div className="train-info-middle">
            {/* <div className="train-duration">{props.train.duration}</div> */}
            <div className="train-view-route">View route</div>
          </div>
          <div className="train-info-right-right">➔</div>
          <div className="train-info-right">
            <div className="train-arrival-time">
              {props.train.route[props.train.route.length - 1].arrivalTime}
            </div>
            <div className="train-arrival-station">
              {/* {props.train.route[props.train.route.length - 1].stationName} */}
              {props.toCity}
            </div>
          </div>
        </div>
        <div className="train-subscriptions" onClick={()=>sendTrain(props.train)}>
          <div className="train-subscription">
            <div className="subscription-left">
              <div className="subscription-class" >SL</div>
              {/* <div className="subscription-price">&#x20B9;{props.train.slprice}</div> */}
            </div>
            <div className="subscription-right">
              <div className="subscription-availability available">
                Available: {props.train.sleeperCoaches[0].capacity}
              </div>
            </div>
          </div>
          <div className="train-subscription">
            <div className="subscription-left">
              <div className="subscription-class">AC</div>
              {/* <div className="subscription-price">&#x20B9;{props.train.acprice}</div> */}
            </div>
            <div className="subscription-right">
              <div className="subscription-availability available">
                Available: {props.train.acCoaches[0].capacity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
