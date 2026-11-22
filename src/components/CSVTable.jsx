import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const CSVTable = () => {
  const [stockDetails, setStockDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./MW-NIFTY-50-29-Jun-2024.csv");
        const reader = response.body.getReader();
        const result = await reader.read();
        const decoder = new TextDecoder("utf-8");
        const csvData = decoder.decode(result.value);

        // Parse CSV data using PapaParse
        const parsedData = Papa.parse(csvData, { header: true }).data;

        // Transform data into stockDetails array
        const stockDetailsArray = parsedData.map((row) => ({
          SYMBOL: row["SYMBOL"],
          LTP: parseFloat(row["LTP"].replace(",", "")), // Assuming LTP is a numeric value
          PercentageChange: parseFloat(
            row["%CHNG"].replace(",", "").replace("%", "")
          ),
        }));

        setStockDetails(stockDetailsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching or parsing CSV data:", error);
        setLoading(false); // Ensure loading state is set to false on error
      }
    };

    fetchData();
  }, []);

  // Function to determine brightness of the background color
  const getBrightness = (hexColor) => {
    const rgb = parseInt(hexColor.slice(1), 16); // Convert hex to RGB
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // Calculate brightness
  };

  // Function to determine appropriate font color
  const getFontColor = (backgroundColor) => {
    return getBrightness(backgroundColor) > 128 ? "black" : "white";
  };

  const getColorForPercentageChange = (change) => {
    const green = [
      "#8fff8f",
      "#85ff85",
      "#7aff7a",
      "#70ff70",
      "#66ff66",
      "#52ff52",
      "#3dff3d",
      "#33ff33",
      "#00eb00",
      "#009900",
      "#008f00",
      "#008500",
      "#006600",
      "#005c00",
      "#005200",
      "#003d00",
      "#002900",
      "#001f00",
      "#001400",
    ];

    const red = [
      "#ff8f8f",
      "#ff8585",
      "#ff7a7a",
      "#ff7070",
      "#ff6666",
      "#ff5252",
      "#ff3d3d",
      "#ff3333",
      "#eb0000",
      "#990000",
      "#8f0000",
      "#850000",
      "#660000",
      "#5c0000",
      "#520000",
      "#3d0000",
      "#290000",
      "#1f0000",
      "#140000",
    ];

    const numericChange = parseFloat(change);

    if (numericChange === 0) {
      return { backgroundColor: "white", color: "black" }; // No change, white background with black text
    } else if (numericChange > 0) {
      // Positive change, select from green array
      let index = Math.min(Math.floor(numericChange * 10), green.length - 1);
      const bgColor = green[index];
      return { backgroundColor: bgColor, color: getFontColor(bgColor) };
    } else {
      // Negative change, select from red array
      let absChange = Math.abs(numericChange);
      let index = Math.min(Math.floor(absChange * 10), red.length - 1);
      const bgColor = red[index];
      return { backgroundColor: bgColor, color: getFontColor(bgColor) };
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-1 p-2">
      <div className="flex justify-center mb-8">
        <img
          src="https://nsearchives.nseindia.com/web/sites/default/files/2019-07/NSE_reverse%404x-100.jpg"
          alt="Logo"
          className="h-16 w-auto rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Live Data NSE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stockDetails.map((stock, index) => (
          <div
            key={index}
            style={getColorForPercentageChange(stock.PercentageChange)}
            className={`rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 p-4`}
          >
            <div className="mb-2">
              <div className="flex items-center">
                <span className="font-semibold bg-gray-900 text-gray-100 px-3 py-1 rounded-lg mr-2">
                  SYMBOL
                </span>
                <div className="flex items-center">{stock.SYMBOL}</div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center">
                <span className="font-semibold bg-gray-900 text-gray-100 px-3 py-1 rounded-lg mr-2">
                  LTP
                </span>
                <div className="flex items-center">{stock.LTP}</div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center">
                <span className="font-semibold bg-gray-900 text-gray-100 px-3 py-1 rounded-lg mr-2">
                  % Change
                </span>
                <div className="flex items-center">
                  {stock.PercentageChange}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSVTable;
