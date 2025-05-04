import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavDash from "../components/NavDash";

const EventInfo = () => {
  const { eventId } = useParams(); // Get eventId from the URL
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/api/events/${eventId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setEventDetails(data.event[0]);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    if (eventId) {
      fetchEventDetails();
    }
  }, [eventId]);

  const handleApplyNow = () => {
    alert("Application submitted!"); // Replace with actual application logic
  };

  if (!eventDetails) {
    return <p>Loading event details...</p>;
  }

  return (
    <>
    <NavDash/>
    <div style={styles.container}>
      <h1 style={styles.title}>{eventDetails.title}</h1>
      <p style={styles.dateLocation}>
        <strong>Date:</strong> {eventDetails.date} | <strong>Location:</strong>{" "}
        {eventDetails.location}
      </p>
      <p style={styles.description}>{eventDetails.description}</p>

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => alert(eventDetails.announcements)}
        >
          Announcements
        </button>
        <button
          style={styles.button}
          onClick={() =>
            window.open(eventDetails.discussionGroupLink, "_blank")
          }
        >
          Discussion Group
        </button>
        <button style={styles.applyButton} onClick={handleApplyNow}>
          Apply Now
        </button>
      </div>
    </div>
  </>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  dateLocation: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  applyButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#28A745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EventInfo;