import React, { useState, useEffect } from "react";
import axios from "axios";

const IndicesData = () => {
  const [indices, setIndices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://analyze.api.tickertape.in/homepage/indices"
        );
        setIndices(response.data.data); // Assuming the data is nested under 'data' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Indices Data</h1>
      {indices ? (
        <div>
          <p>Nifty 50: {indices.nifty50}</p>
          <p>Sensex: {indices.sensex}</p>
          {/* Add more data as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndicesData;
