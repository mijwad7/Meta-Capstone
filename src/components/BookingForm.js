import React, { useState } from "react";
import { submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ dispatch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };

  const availableTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  const isFormValid = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      selectedDate !== "" &&
      selectedTime !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.error("Form is not valid. Please fill in all fields.");
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      selectedDate,
      selectedTime,
    };

    submitForm(formData);
  };

  const submitForm = async (formData) => {
    try {
      const isBookingSuccessful = await submitAPI(formData);
      if (isBookingSuccessful) {
        navigate("/confirmedbooking");
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-label="First Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            aria-label="Last Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="res-date" className="form-label">
            Choose date
          </label>
          <input
            type="date"
            className="form-control"
            id="res-date"
            value={selectedDate}
            onChange={handleDateChange}
            required
            aria-label="Choose date"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="res-time" className="form-label">
            Choose time
          </label>
          <select
            className="form-select"
            id="res-time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            aria-label="Choose time"
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid()}
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
