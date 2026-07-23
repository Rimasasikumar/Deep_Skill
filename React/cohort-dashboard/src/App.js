import React from "react";
import cohorts from "./CohortData";
import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cohort Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          cohort={cohort}
        />
      ))}
    </div>
  );
}

export default App;