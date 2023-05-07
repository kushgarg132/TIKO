import React, { useState } from "react";
import "./Filters.css";

const filters = {
  quickFilters: [
    { id: "ac", name: "AC" },
    { id: "sleeper", name: "SLEEPER" },
  ],
  timingFilters: [
    { id: "night", name: "Night", startTime: 0, endTime: 6 },
    { id: "morning", name: "Morning", startTime: 6, endTime: 12 },
    { id: "afternoon", name: "Afternoon", startTime: 12, endTime: 18 },
    { id: "evening", name: "Evening", startTime: 18, endTime: 24 },
  ],
};

const Filter = ({ filter, isChecked, onFilterChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onFilterChange(filter)}
      />
      {filter.name}
    </label>
  );
};

const FilteringComponent = ({ onFilterChange }) => {
  const [quickFilters, setQuickFilters] = useState(
    filters.quickFilters.map((filter) => ({
      ...filter,
      isChecked: false,
    }))
  );

  const [timingFilters, setTimingFilters] = useState(
    filters.timingFilters.map((filter) => ({
      ...filter,
      isChecked: false,
    }))
  );

  const handleQuickFilterChange = (changedFilter) => {
    const updatedFilters = quickFilters.map((filter) =>
      filter.id === changedFilter.id
        ? { ...filter, isChecked: !filter.isChecked }
        : filter
    );
    setQuickFilters(updatedFilters);

    onFilterChange({
      quickFilters: updatedFilters.filter((filter) => filter.isChecked),
      timingFilters: timingFilters.filter((filter) => filter.isChecked),
    });
  };

  const handleTimingFilterChange = (changedFilter) => {
    const updatedFilters = timingFilters.map((filter) =>
      filter.id === changedFilter.id
        ? { ...filter, isChecked: !filter.isChecked }
        : filter
    );
    setTimingFilters(updatedFilters);

    onFilterChange({
      quickFilters: quickFilters.filter((filter) => filter.isChecked),
      timingFilters: updatedFilters.filter((filter) => filter.isChecked),
    });
  };

  return (
    <div className="filters">
      <div>
        <h2>Quick Filters</h2>
        {quickFilters.map((filter) => (
          <Filter
            key={filter.id}
            filter={filter}
            isChecked={filter.isChecked}
            onFilterChange={handleQuickFilterChange}
          />
        ))}

        <h2>Timing Filters</h2>
        {timingFilters.map((filter) => (
          <Filter
            key={filter.id}
            filter={filter}
            isChecked={filter.isChecked}
            onFilterChange={handleTimingFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteringComponent;
