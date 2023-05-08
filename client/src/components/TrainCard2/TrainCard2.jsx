import React from "react";
import "./TrainCard2.css";

const TrainCard = () => {
  return (
    <div className="train-card-1">
      <div className="train-card-header-1">
        <div className="train-name-1">Irctc Tejas Exp</div>
        <div className="train-number-1">Train No: #82502</div>
        <div className="train-days-1">
          <div className="train-day-1">
            <span className="day-label-1">S</span>
          </div>
          <div className="train-day-1">
            <span className="day-label-1">M</span>
          </div>
          <div className="train-day-1">
            <span className="day-label-1">T</span>
          </div>
          <div className="train-day-1">
            <span className="day-label-1">W</span>
          </div>
          <div className="train-day-1">
            <span className="day-label-1">T</span>
          </div>
          <div className="train-day-1">
            <span className="day-label-1">F</span>
          </div>
          <div className="train-day-1">
            <span className="day-label-1">S</span>
          </div>
        </div>
      </div>
      <div className="train-card-body-1">
        <div className="train-info-1">
          <div className="train-info-left-1">
            <div className="train-departure-time-1">3:40 PM, Sun</div>
            <div className="train-departure-station-1">
              New Delhi Railway Station (NDLS)
            </div>
          </div>
          <div className="train-info-left-left-1">➔</div>
          <div className="train-info-middle-1">
            <div className="train-duration-1">4h 55m</div>
            <div className="train-view-route-1">View route</div>
          </div>
          <div className="train-info-right-right-1">➔</div>
          <div className="train-info-right-1">
            <div className="train-arrival-time-1">8:35 PM, Sun</div>
            <div className="train-arrival-station-1">
              Kanpur Central Railway Station (CNB)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
