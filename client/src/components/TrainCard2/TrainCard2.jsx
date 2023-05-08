import React from "react";
import "./TrainCard2.css";

const TrainCard = () => {
  return (
    <div className="train-card">
      <div className="train-card-header">
        <div className="train-name">Irctc Tejas Exp</div>
        <div className="train-number">Train No: #82502</div>
        <div className="train-days">
          <div className="train-day">
            <span className="day-label">S</span>
          </div>
          <div className="train-day">
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
          </div>
        </div>
      </div>
      <div className="train-card-body">
        <div className="train-info">
          <div className="train-info-left">
            <div className="train-departure-time">3:40 PM, Sun</div>
            <div className="train-departure-station">
              New Delhi Railway Station (NDLS)
            </div>
          </div>
          <div className="train-info-left-left">➔</div>
          <div className="train-info-middle">
            <div className="train-duration">4h 55m</div>
            <div className="train-view-route">View route</div>
          </div>
          <div className="train-info-right-right">➔</div>
          <div className="train-info-right">
            <div className="train-arrival-time">8:35 PM, Sun</div>
            <div className="train-arrival-station">
              Kanpur Central Railway Station (CNB)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
