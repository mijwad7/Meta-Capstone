import React, { useReducer, useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const availableTimesReducer = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return action.payload;
  }
  return state;
};

const initializeTimes = async (dispatch) => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  try {
    const availableTimes = await fetchAPI(formattedDate);
    dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
  } catch (error) {
    console.error("Error fetching available times:", error);
  }
};

const updateTimes = async (dispatch, selectedDate) => {
  try {
    const availableTimes = await fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
  } catch (error) {
    console.error("Error fetching available times:", error);
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    initializeTimes(dispatch);
  }, []);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    updateTimes(dispatch, newDate);
  };

  const submitForm = async (formData) => {
    try {
      const isBookingSuccessful = await submitAPI(formData); // Call the submitAPI function
      if (isBookingSuccessful) {
        navigate("/booking-confirmed"); // Navigate to the booking confirmation page
      } else {
        // Handle booking submission failure
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", fontFamily: "'Markazi Text', serif", color: "rgb(73, 94, 87)" }}>
        Booking Page
      </h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        handleDateChange={handleDateChange}
        selectedDate={selectedDate}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Main;
