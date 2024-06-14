import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineNotification } from "react-icons/ai";

const Drawer = ({ courseType, batchStartInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [commencementDate, setCommencementDate] = useState("");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const today = new Date();
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const formattedDate = oneWeekLater.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCommencementDate(formattedDate);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "8px 16px",
          backgroundColor: "#FFD700",
          color: "#000",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          outline: "none",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginTop: "-4px",
            marginRight: "-4px",
            backgroundColor: "#FF0000",
            color: "#FFF",
            padding: "4px 8px",
            borderRadius: "50%",
            fontSize: "12px",
            fontWeight: "600",
            width: "20px", // Adjust the width and height to make it circular
            height: "20px", // Adjust the width and height to make it circular
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          1
        </span>
        <AiOutlineNotification size={34} style={{ marginRight: "8px" }} />
        <span style={{ fontSize: "1.25rem", fontWeight: "600" }}>
          
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            zIndex: 40,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              height: "100%",
              position: "absolute",
              right: 0,
            }}
            onClick={toggleDrawer}
          ></div>
          <div
            style={{
              backgroundColor: "#EEE",
              width: "100%", // Full width on mobile
              maxWidth: "320px", // Maximum width on larger screens
              position: "absolute",
              right: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                  padding: "8px",
                  backgroundColor: "#000",
                }}
              >
                <h2
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#FFF",
                  }}
                >
                  New Batch Start Date
                </h2>
                <button onClick={toggleDrawer}>
                  <AiOutlineClose size={24} style={{ color: "#fff" }} />
                </button>
              </div>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                {courseType} Batches will Start from {commencementDate}. Enroll
                now!
              </p>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#555" }}>
              Commencement Date: {commencementDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
