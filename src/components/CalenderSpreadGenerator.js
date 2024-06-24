import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";

const CalendarSpreadGenerator = () => {
  const [spotPrice, setSpotPrice] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [calendarSpread, setCalendarSpread] = useState("");

  const handleGenerateSpread = () => {
    const spot = Number(spotPrice);
    if (isNaN(spot)) {
      alert("Please enter a valid spot price.");
      return;
    }

    const roundedSpot = Math.round(spot / 100) * 100; // Round spot price to nearest multiple of 100
    const buyStrike = roundedSpot - 500; // Example: Buy call strike price is 500 points below rounded spot
    const sellStrike = roundedSpot + 500; // Example: Sell call strike price is 500 points above rounded spot

    const spread = `Buy Call at ${buyStrike}, Sell Call at ${sellStrike}, Expiry Date: ${expiryDate}`;
    setCalendarSpread(spread);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Bank Nifty Calendar Spread Generator
      </Typography>
      <TextField
        label="Enter Spot Price"
        variant="outlined"
        value={spotPrice}
        onChange={(e) => setSpotPrice(e.target.value)}
        fullWidth
        margin="normal"
        type="number"
      />
      <TextField
        label="Enter Expiry Date"
        variant="outlined"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        fullWidth
        margin="normal"
        type="date" // Use type="date" for date input
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateSpread}
      >
        Generate Spread
      </Button>
      {calendarSpread && (
        <Typography variant="body1" gutterBottom>
          Generated Calendar Spread: {calendarSpread}
        </Typography>
      )}
    </Container>
  );
};

export default CalendarSpreadGenerator;
